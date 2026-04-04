import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
    <div>
        <p>#{props.record.day} - {props.record.score_str}/{props.record.denominator}</p>
    </div>
);

export default function GameHistory({user_name, game_name, day}) {
    const [records, setRecords] = useState([]);
    
    // This method fetches the scores from the database based on user's friends list, game_name, and day.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5050/score/gamehistory/${user_name}/${game_name}/${day}`, {
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
            const records = await response.json();
            setRecords(records);
        }
        getRecords();
        return;
    }, [records.length]);
    
    // This method will map out the records on the table
    function recordList() {
        return records.map((record, index) => {
            return (
                <Record
                    index={index+1}
                    record={record}
                    key={record._id}
                />
            );
        });
    }

    return (
        <div class="grow px-6 pb-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl py-6">
                {game_name}
            </div>
            {recordList()}
            <br></br>
        </div>
    );
}