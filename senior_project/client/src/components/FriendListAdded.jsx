import { useEffect, useState } from "react";
import FriendStub from "./FriendStub";

// Display name of friend
const Record = (props) => (
    <div>
        test
        <FriendStub user_name={props.record.user_name_2} />
    </div>
);

export default function FriendListAdded({user_name = "user", profile_user}) {
    const [records, setRecords] = useState([]);

    // Fetch a list of Friends of user_name
    useEffect(() => {
        async function getRecords() {  
            const response = await fetch(`http://localhost:5050/friend/friends/${user_name}`, {
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
    }, [records]);
    
    // This method will map out the records on the table
    function recordList() {
        return records.map((record, index) => {
            return (
                <Record
                    index={index+1}
                    friend={record}
                    key={record._id}
                />
            );
        });
    }

    return (
        <div class="flex flex-col col-span-1 max-h-[525px] overflow-y-scroll gap-2">
            <br></br>
            <div class="sticky top-0 w-full px-6 py-2 bg-zinc-700 text-white font-semibold">
                Current friends
            </div>
            <FriendStub user_name="jane_doe" />
            <FriendStub user_name="john_doe" />
            <FriendStub user_name="mark_101" />
            <FriendStub user_name="sally_b_4" />
            <FriendStub user_name="tom2847" />

            {/*
            {recordList()}
            */}
        </div>
    );
}