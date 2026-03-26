import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
    <div>
        <p>{props.index}. {props.record.user_name}</p>
    </div>
);

export default function RecordList() {
    const [records, setRecords] = useState([]);
    
    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5050/score/`);
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


    // This method will delete a record
    async function deleteRecord(id) {
        await fetch(`http://localhost:5050/score/${id}`, {
            method: "DELETE",
        });
        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
    }

    
    // This method will map out the records on the table
    function recordList() {
        return records.map((record, index, title) => {
            return (
                <Record
                    index={index+1}
                    record={record}
                    deleteRecord={() => deleteRecord(record._id)}
                    key={record._id}
                />
            );
        });
    }

    return (
        <div class= "grow px-6 py-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl">
                Leaderboard
            </div>
            <div className="text-l py-1">
                <i>Wordle</i>
            </div>
            {recordList()}
        </div>
    );
}