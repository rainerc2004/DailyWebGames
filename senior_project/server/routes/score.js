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
    //let query = { user_id: { $in: ["user_id", "user_id2"]}};
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});


// This section will help you get a list of scores from User('s friends), Game name, and Day
router.get("/user/:username/:gamename/:day", async (req,res) => {
    // Get records of friends of user
    let collection = await db.collection("friends");
    let query = { user_name_1: {$eq: req.params.username}, status: {$eq: "friends"} };
    let results = await collection.find(query).toArray();

    // Create list of friends list usernames
    let friend_names = [];
    for(let i = 0; i < results.length; i++) {
        friend_names.push(results[i].user_name_2);
    }
    friend_names.push(req.params.username);
    
    // Determine sort order (1 = ascending, -1 = descending)
    collection = await db.collection("games");
    query = { title: {$eq: req.params.gamename} };
    results = await collection.findOne(query);
    
    let sort_direction = 1;
    if(results.score_goal == 'min') {
        sort_direction = 1;
    } else if(results.score_goal == 'max') {
        sort_direction = -1;
    } else {
        //throw new Error('Error: score_goal not declared for ', req.params.gamename);
        res.send().status(404);
    }

    // Get records of scores
    collection = await db.collection("scores");
    query = { user_name: {$in: friend_names}, game_name: {$eq: req.params.gamename}, day: {$eq: Number(req.params.day)} };
    results = await collection.find(query).sort({score_value: sort_direction}).toArray();

    // TODO: Change a score of "-1" to "X"
    /*
    for(let j = 0; j < results.length; j++) {
        if(results[j].score_value == -1) {
            results[j].score_text == 'X';
        }
    }
    */

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