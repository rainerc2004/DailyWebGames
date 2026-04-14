import { useEffect, useState } from "react";

const Record = (props) => (
    <div>
        <p>{props.index}. @{props.record.user_name} - {props.record.score_str}/{props.record.denominator}</p>
    </div>
);

export default function RecordList({user_name, game_name, day}) {
    const [records, setRecords] = useState([]);
    
    // This method fetches the scores from the database based on user's friends list, game_name, and day.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5050/score/leaderboard/${user_name}/${game_name}/${day}`, {
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
        <div>
            <div className="text-xl">
                {game_name} - #{day} 
            </div>
            <br></br>
            {recordList()}
        </div>
    );
}