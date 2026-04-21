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


// This section will help you get a list of Games this user or friends played today
router.get("/gamehistory/:username/all/today", async (req,res) => {
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
    
    // Get records of all games in database sorted alphabetically
    collection  = await db.collection("games");
    results = await collection.find({}).sort({game_name: 1}).toArray();

    // Create list of game_name and current_day
    let today_games = []
    for(let i = 0; i < results.length; i++) {
        let game = [results[i].game_name, results[i].current_day];
        today_games.push(game);
    }

    // Get records of scores
    collection = await db.collection("scores");
    results = [];
    for(let i = 0; i < today_games.length; i++) {
        query = { user_name: {$in: friend_names}, game_name: {$eq: today_games[i][0]}, day: {$eq: today_games[i][1]} };
        let result = await collection.findOne(query);
        if(result) {
            results.push(result);
        }
    }

    res.send(results).status(200);
});


// This section will help you get a list of last week of scores from User, Game name, and Day
router.get("/gamehistory/:username/:gamename/:day", async (req,res) => {
    // Get records of scores
    let collection = await db.collection("scores");
    let query = { user_name: {$eq: req.params.username}, game_name: {$eq: req.params.gamename}, day: {$in: [Number(req.params.day), Number(req.params.day) - 1, Number(req.params.day) - 2, Number(req.params.day) - 3, Number(req.params.day) - 4, Number(req.params.day) - 5, Number(req.params.day) - 6]} };
    let results = await collection.find(query).sort({day: -1}).toArray();

    res.send(results).status(200);
});


// This section will help you get a list of scores from User('s friends), Game name, and Day
router.get("/leaderboard/:username/:gamename/:day", async (req,res) => {
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
    query = { game_name: {$eq: req.params.gamename} };
    results = await collection.findOne(query);

    let sort_direction = 1;
    if(results.score_goal == 'min') {
        sort_direction = 1;
    } else if(results.score_goal == 'max') {
        sort_direction = -1;
    } else {
        res.send().status(404);
    }

    // Get records of scores
    collection = await db.collection("scores");
    query = { user_name: {$in: friend_names}, game_name: {$eq: req.params.gamename}, day: {$eq: Number(req.params.day)} };
    results = await collection.find(query).sort({score_int: sort_direction}).toArray();    

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


// This section will help you update a score by user_name and game_name.
router.patch("/update/:username/:gamename/day/:scorestr", async (req, res) => {
    try {
        // Find current day of given game
        let collection = await db.collection("games");
        let query = { game_name: {$eq: req.params.gamename} };
        let result = await collection.findOne(query);
        let current_day = result.current_day;

        // Replace a score of 'X' with a number that will sort to bottom of leaderboard
        let scoreint = 0;
        if(req.params.scorestr == "X") {
            if(result.score_goal == "min") {
                scoreint = 99999;
            } else if(result.score_goal == "max") {
                scoreint = -1;
            }
        } else {
            scoreint = Number(scorestr);
        }

        // Update entry in database
        collection = await db.collection("scores");
        query = { 
            user_name: {$eq: req.params.username}, 
            game_name: {$eq: req.params.gamename},
            day: {$eq: current_day} 
        };
        updates = {
            $set: {
                score_str: req.params.scorestr,
                score_int: scoreint
            },
        };
        result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating score");
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