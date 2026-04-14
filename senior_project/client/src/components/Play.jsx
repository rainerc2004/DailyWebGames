import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PlayNavbar from "./PlayNavbar";
import Leaderboard from "./Leaderboard";

/*
const game_name = "Wordle";
const updateGame = ({game}) => {
    game_name = game;
}*/

const Play = ({}) => {
    const [game, setGame] = useState("Wordle");
    const [record, setRecord] = useState("");
    
    // This method fetches the game info from the database based on game_name
    useEffect(() => {
        async function getRecord() {
            const response = await fetch(`http://localhost:5050/game/game_name/${game}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const record = await response.json();
            setRecord(record);
        }
        getRecord();
        return;
    });


    return (
        <div className="flex flex-col h-screen">
            <PlayNavbar updateGame={setGame} />
            <div className="grid flex-1">
                <iframe
                    className="col-span-4"
                    border="none"
                    height="100%"
                    width="100%"
                    allow="clipboard-write; picture-in-picture full"
                    src={record.game_link}>
                </iframe>
            </div>

        </div>
    );
};
export default Play
