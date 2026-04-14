import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export default function ProfilePanel({user_name}) {
    const [record, setRecord] = useState('');

    const handleSignout = () => {
        //handle signout
    };

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
        <div class="grow flex flex-col justify-between px-6 py-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div class="flex flex-col gap-2">
            <div className="text-xl">
                {record.display_name}
            </div>
            <div className="text-x2">
                @{record.user_name}
            </div>
            <div className="py-6">
                <img src={"/profile_pictures/".concat(record.profile_image)} className="rounded-lg"/>
            </div>
            <div>
                <p>{record.description}</p>
            </div>
            </div>
            <div class="flex flex-col gap-2">
            <NavLink to="/profile/edit" className="px-6 py-2 w-full bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                Edit your profile
            </NavLink>
                <button onClick={handleSignout} class="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                Sign out
                </button>
            </div>
        </div>
    );
}