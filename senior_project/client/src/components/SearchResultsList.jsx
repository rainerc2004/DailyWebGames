import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListCard from "./ListCard";


const Record = (props) => (
    <div className="flex flex-col gap-6">
        <ListCard list_name={props.record.list_name} owner_user_name={props.record.owner_user_name}/>
    </div>
);

export default function RecordList({search}) {
    const [records, setRecords] = useState([]);
    
    // This method fetches the search results from the Playlists table
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5050/playlist/search/${search}`, {
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
        return records.map((record) => {
            return (
                <Record
                    record={record}
                    key={record._id}
                />
            );
        });
    }

    return (
        <div className="flex flex-col overflow-y-scroll col-span-1 px-6 pb-6 gap-6">
            <div className="sticky px-6 top-0 bg-gray-300 font-semibold rounded-lg text-left">
                <div className="text-xl py-6">
                    List search results for "{search}"
                </div>
            </div>

            {recordList()}
        </div>
    );
}