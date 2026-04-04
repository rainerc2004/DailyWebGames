import { useEffect, useState } from "react";
import pfp from "../assets/sumrall.jpg";

export default function ProfilePanel({user_name}) {
    const [record, setRecord] = useState('');

    // This method fetches the scores from the database based on user's friends list, game_name, and day.
    useEffect(() => {
        async function getRecord() {
            const response = await fetch(`http://localhost:5050/user/profile/${user_name}`, {
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
        <div class="grow px-6 py-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl">
                {user_name}
            </div>
            <div className="py-6">
            {/*{"..assets/".concat(record.profile_image)}*/}
            <img
                src={pfp}
                className="rounded-lg" 
                />
            </div>
            <div>
                <p>{record.description}</p>
            </div>
        </div>
    );
}