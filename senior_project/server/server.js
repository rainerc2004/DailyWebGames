import express from "express";
import cors from "cors";
import games from "./routes/game.js";
import playlists from "./routes/playlist.js";
import users from "./routes/user.js";
import friends from "./routes/friend.js";
import scores from "./routes/score.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/game", games);
app.use("/playlist", playlists);
app.use("/user", users);
app.use("/friend", friends);
app.use("/score", scores);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});