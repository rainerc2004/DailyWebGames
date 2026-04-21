import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /friend.
const router = express.Router();

// This section will help you get a list of all the friend relationships between users.
router.get("/", async (req, res) => {
    let collection = await db.collection("friends");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});


// This section will help you get a list of all friends of a user by user_id
router.get("friends/:username", async (req, res) => {
    console.log(test);
    let collection = await db.collection("friends");
    let query = { user_name_1: { $eq: req.params.username}, status: { $eq: "friends"}};
    let results = await collection.find(query).sort({user_name_2: 1}).toArray();
    console.log(results);
    res.send(results.status(200));
})

// This section will help you get a list of all friend invites from a user by user_name
router.get("pending/:username", async (req, res) => {
    let collection = await db.collection("friends");
    let query = { user_name_1: { $eq: req.params.username}, status: { $eq: "pending"}};
    let results = await collection.find(query).sort({user_name_2: 1}).toArray();
    res.send(results.status(200));
})

// This section will help you get a list of all friend invites to a user by user_name
router.get("invites/:username", async (req, res) => {
    console.log(test);
    let collection = await db.collection("friends");
    let query = { user_name_2: { $eq: req.params.username}, status: { $eq: "pending"}};
    let results = await collection.find(query).sort({user_name_1: 1}).toArray();
    console.log(results);
    res.send(results.status(200));
})


// This section will help you get a single friend by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("friends");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});


// This section will help you create a new friend relationship.
router.post("/add/:username1/:username2/:status", async (req, res) => {
    try {
        // Check that username2 is a real user
        console.log("add friend");
        let collection = await db.collection("users");
        let query = { user_name: {$eq: req.params.username2} };
        let result = await collection.findOne(query);
        if(!result) {
            res.status(500).send("Error adding friend");
            return;
        }

        // Check that username1 and username2 are not already friends
        collection = await db.collection("friends");
        query = { user_name_1: {$eq: req.params.username2}, user_name_2: {$eq: req.params.username1}};
        result = await collection.findOne(query);
        if(result) {
            res.status(500).send("Error adding friend");
            return;
        }

        // Create new entry to Friends table
        let newDocument = {
            user_name_1: req.params.username1,
            user_name_2: req.params.username2,
            status: req.params.status
        };
        result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding friend");
    }
});


// This section will help you create a new friend relationship.
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            user_id_1: req.body.user_id_1,
            user_id_2: req.body.user_id_2,
            status: req.body.status
        };
        let collection = await db.collection("friends");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding friend");
    }
});


// This section will help you accept a friend request by username.
router.patch("/accept/:username1/:username2", async (req, res) => {
    try {
        const query = { user_name_1: {$eq: req.params.username1}, user_name_2: {$eq: req.params.username2} };
        const updates = {
            $set: {
                status: "friends"
            },
        };

        let collection = await db.collection("friends");
        let result = await collection.updateOne(query, updates);
        
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating friend");
    }
});


// This section will help you update a friend by id.
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                user_id_1: req.body.user_id_1,
                user_id_2: req.body.user_id_2,
                status: req.body.status
            },
        };

        let collection = await db.collection("friends");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating friend");
    }
});


// This section will help you delete a friend by user_name
router.delete("/remove/:username1/:username2", async (req, res) => {
    try {
        const collection = db.collection("friends");
        const query = { user_name_1: {$eq: req.params.username1}, user_name_2: {$eq: req.params.username2} };
        let result = await collection.deleteOne(query);

        query = { user_name_1: {$eq: req.params.username2}, user_name_2: {$eq: req.params.username1} };
        result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting friend");
    }
});


// This section will help you delete a friend by id
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

        const collection = db.collection("friends");
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting friend");
    }
});

export default router;