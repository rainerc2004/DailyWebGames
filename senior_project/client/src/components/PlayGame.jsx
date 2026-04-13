import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Leaderboard from "./Leaderboard";


export default function PlayGame({user_name}) {
    let location = useLocation();
    const [game, setGame] = useState("");
    const [record, setRecord] = useState("");
    user_name = location.state.user_name;
    
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
        <div className="grid flex-1 grid-cols-5">
            <iframe
                className="col-span-4"
                border="none"
                height="100%"
                width="100%"
                allow="clipboard-write; picture-in-picture full"
                src={record.game_link}>
            </iframe>
            
            <div className="flex flex-col col-span-1 flex-end justify-end gap-3 px-6 pb-6">
                <div class= "grow px-6 py-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
                    <div className="text-xl">
                        Leaderboard
                    </div>
                    <Leaderboard user_name="user" game_name={record.game_name} day={record.current_day}/>
                </div>
                <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                    Paste Score!
                </button>
                <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                    Next Game!
                </button>
            </div>
        </div>
    );
};
