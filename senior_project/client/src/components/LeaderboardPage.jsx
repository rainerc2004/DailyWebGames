import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";


const Record = (props) => (
    <div class= "grow px-6 py-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
        <Leaderboard user_name={props.user_name} game_name={props.record.game_name} day={props.record.day} />
    </div>
);

export default function LeaderboardPage({user_name}) {
    const [records, setRecords] = useState([]);
    let location = useLocation();
    user_name = location.state.user_name;
    
    // This method fetches the scores from the database based on user's friends list, game_name, and day.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5050/score/gamehistory/${user_name}/all/today`, {
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
        let table_0 = [];
        let table_1 = [];
        let table_2 = [];
        let table_3 = [];
        let table_4 = [];
        let count = 0;

        for(let i = 0; i < records.length; i++) {
            if (count == 0) {
                table_0.push(records[i]);
            } else if (count == 1) {
                table_1.push(records[i]);
            } else if (count == 2) {
                table_2.push(records[i]);
            } else if (count == 3) {
                table_3.push(records[i]);
            } else if(count == 4) {
                table_4.push(records[i]);
                count = -1;
            }
            count += 1;
        }   

        let map_0 = table_0.map((record) => { return (<Record user_name={user_name} record={record} />); });
        let map_1 = table_1.map((record) => { return (<Record user_name={user_name} record={record} />); });
        let map_2 = table_2.map((record) => { return (<Record user_name={user_name} record={record} />); });
        let map_3 = table_3.map((record) => { return (<Record user_name={user_name} record={record} />); });
        let map_4 = table_4.map((record) => { return (<Record user_name={user_name} record={record} />); });

        return (
            <div className="grid flex flex-col flex-1 items-start justify-start grid-cols-5 px-3">
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6"> {map_0} </div>
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6"> {map_1} </div>
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6"> {map_2} </div>
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6"> {map_3} </div>
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6"> {map_4} </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            {recordList()}
        </div>
    );
};