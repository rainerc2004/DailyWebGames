import { useEffect, useState } from "react";
import playlist_name from "./ListCard";

export default function ListPanel({ user_name, list_name, owner_user_name }) {
    const [owner, setOwner] = useState('');

    // This method fetches the user's profile from the database
    useEffect(() => {
        async function getOwner() {
            const response = await fetch(`http://localhost:5050/user/profile/${owner_user_name}`, {
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
            const owner = await response.json();
            setOwner(owner);
        }
        getOwner();
        return;
    })

    async function setList(username, listname) {
        const response = await fetch(`http://localhost:5050/user/setlist/${listname}/${username}`, {
            method: 'PATCH'
        });
    }

    return (
        <div class="grow px-6 py-6 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <button 
                className="mt-auto px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                onClick={() => setList(user_name, list_name)} >
                Make this my default list!
            </button>
            <br></br>
            <br></br>
            <div className="text-xl">
                {owner.display_name}
            </div>
            <div className="text-x2">
                @{owner.user_name}
            </div>
            <div className="py-6">
                <img src={"/profile_pictures/".concat(owner.profile_image)} className="rounded-lg"/>
            </div>
            <div>
                <p>{owner.description}</p>
            </div>
        </div>
    );
}