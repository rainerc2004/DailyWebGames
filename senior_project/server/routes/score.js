import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /score.
const router = express.Router();

// This section will help you get a list of all the scores.
router.get("/", async (req, res) => {
    let collection = await db.collection("scores");
    let query = { user_id: { $in: ["user_id", "user_id2"]}};
    let results = await collection.find(query).toArray();
    res.send(results).status(200);
});

// This section will help you get a single score by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("scores");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// This section will help you get a list of scores by user_id

// This section will help you get a list of scores by game_id
/*
router.get("/game_id/", async (req,res) => {
    let collection = await db.collection("scores");
    let query = { }
});
*/


// This section will help you get a list of scores by 

// This section will help you create a new score.
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            game_id: req.body.game_id,
            day: req.body.day,
            user_id: req.body.user_id,
            score_value: req.body.score_value
        };
        let collection = await db.collection("scores");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding score");
    }
});

// This section will help you update a score by id.
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                game_id: req.body.game_id,
                day: req.body.day,
                user_id: req.body.user_id,
                score_value: req.body.score_value
            },
        };

        let collection = await db.collection("scores");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating score");
    }
});

// This section will help you delete a score
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

        const collection = db.collection("scores");
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting score");
    }
});

export default router;