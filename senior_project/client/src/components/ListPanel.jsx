import { useEffect, useState } from "react";

export default function ListPanel({ user_name }) {
    const [record, setRecord] = useState('');

    // This method fetches the user's profile from the database
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
        <div class="grow flex flex-col px-6 py-6 gap-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div className="text-xl">
                {record.display_name}
            </div>
            <div>
                <p>{record.description}</p>
            </div>
            <button className="mt-auto px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                Make this my default list!
            </button>
        </div>
    );
}