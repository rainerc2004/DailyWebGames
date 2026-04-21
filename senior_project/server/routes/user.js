import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

import bcrypt from "bcrypt";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const router = express.Router();

// bcrypt is used to perform password encryption
const salt = await bcrypt.genSalt(10);


// This section will help you get a list of all the users.
router.get("/", async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});


// This section will help you get a single user by user_name
router.get("/profile/:username", async (req, res) => {
    let collection = await db.collection("users");
    let query = { user_name: {$eq: req.params.username} };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});


// This section will help you log in using a username and password
router.get("/login/:username/:password", async (req, res) => {
    try {
        let collection = await db.collection("users");
        let query = { user_name: {$eq: req.params.username} };
        let exists = await collection.findOne(query);
        if (!exists) {
            res.status(500).send("Username doesn't exist");
            return;
        }

        // Undo password hash and compare 
        const match = await bcrypt.compare(req.params.password, exists.password);
        if (!match) {
            res.status(500).send("Incorrect password");
            return;
        }
        res.send().status(200);

        query = { user_name: {$eq: "user"} };
        const updates = {
            $set: {
                display_user: req.params.username
            },
        };
        let result = await collection.updateOne(query, updates);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding user");
    }
});


// This section will get the results of searching the users table
router.get("/search", async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();

    res.send(results).status(200);   
});

// This section will get the results of searching the users table with a query
router.get("/search/:search", async (req, res) => {
    let collection = await db.collection("users");
    let query = { user_name: {$regex: req.params.search, $options: 'i'} };
    let results = await collection.find(query).toArray();

    res.send(results).status(200);   
});


// This section will help you get a single user by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("users");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});


// This section will help you sign up a new user.
router.post("/sign_up/:username/:password", async (req, res) => {
    try {
        // Check if username exists
        let collection = await db.collection("users");
        let query = { user_name: {$eq: req.params.username} };
        let exists = await collection.findOne(query);
        if (exists) {
            res.status(500).send("Username already exists!");
            return;
        }

        // Hash password
        const hash = await bcrypt.hash(req.params.password, salt);

        // Create new database entry
        let newDocument = {
            user_name: req.params.username,
            password: hash,
            display_name: req.params.username,
            display_user: req.params.username,
            profile_image: "default.jpg",
            description: "",
            main_list: ""
        };
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);

        query = { user_name: {$eq: "user"} };
        const updates = {
            $set: {
                display_user: req.params.username
            },
        };
        result = await collection.updateOne(query, updates);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding user");
    }
});


// This section will help you create a new user.
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            username: req.body.username,
            description: req.body.description,
            profile_image: req.body.profile_image,
            bookmarked_lists: req.body.bookmarked_lists
        };
        let collection = await db.collection("users");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding user");
    }
});

// This section will help you update a user's main_list by username.
router.patch("/setlist/:listname/:username", async (req, res) => {
    try {
        const query = { user_name: {$eq: req.params.username} };
        const updates = {
            $set: {
                main_list: req.params.listname
            },
        };

        let collection = await db.collection("users");
        let result = await collection.updateOne(query, updates);

        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating user");
    }
});


// This section will help you update a user's description by user_name.
router.patch("/update_bio/:username/:bio", async (req, res) => {
    try {
        const query = { user_name: {$eq: req.params.username} };
        const updates = {
            $set: {
                description: req.params.bio
            },
        };

        let collection = await db.collection("users");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating user");
    }
});

// This section will help you update a user's display_name by user_name.
router.patch("/update_displayname/:username/:displayname/", async (req, res) => {
    try {
        const query = { user_name: {$eq: req.params.username} };
        const updates = {
            $set: {
                display_name: req.params.displayname
            },
        };

        let collection = await db.collection("users");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating user");
    }
});

// This section will help you update a user by user_name.
router.patch("/update_user/:displayuser/", async (req, res) => {
    try {
        console.log(req.params.displayuser);
        const query = { user_name: {$eq: "user"} };
        const updates = {
            $set: {
                display_user: req.params.displayuser
            },
        };

        let collection = await db.collection("users");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating user");
    }
});

// This section will help you update a user by id.
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                username: req.body.username,
                description: req.body.description,
                profile_image: req.body.profile_image,
                bookmarked_lists: req.body.bookmarked_lists
            },
        };

        let collection = await db.collection("users");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating user");
    }
});

// This section will help you delete a user
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

        const collection = db.collection("users");
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting user");
    }
});

export default router;