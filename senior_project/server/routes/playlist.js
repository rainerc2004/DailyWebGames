import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /playlist.
const router = express.Router();

// This section will help you get a list of all the playlists.
router.get("/", async (req, res) => {
    let collection = await db.collection("playlists");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});


// This section will get the results of searching the playlists table
router.get("/search", async (req, res) => {
    let collection = await db.collection("playlists");
    let results = await collection.find({}).toArray();

    res.send(results).status(200);   
});

// This section will get the results of searching the playlists table with a query
router.get("/search/:search", async (req, res) => {
    let collection = await db.collection("playlists");
    let query = { title: {$regex: req.params.search, $options: 'i'} };
    let results = await collection.find(query).toArray();

    res.send(results).status(200);   
});


// This section will help you get a single playlist by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("playlists");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// This section will help you create a new playlist.
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            title: req.body.title,
            description: req.body.description,
            owner_id: req.body.owner_id,
            rating: req.body.rating,
            bookmarks: req.body.bookmarks,
            games: req.body.games
        };
        let collection = await db.collection("playlists");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding playlist");
    }
});

// This section will help you update a playlist by id.
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                title: req.body.title,
                description: req.body.description,
                owner_id: req.body.owner_id,
                rating: req.body.rating,
                bookmarks: req.body.bookmarks,
                games: req.body.games
            },
        };

        let collection = await db.collection("playlists");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating playlist");
    }
});

// This section will help you delete a playlist
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

        const collection = db.collection("playlists");
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting playlist");
    }
});

export default router;