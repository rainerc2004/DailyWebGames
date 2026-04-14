import { useEffect, useState } from "react";
import playlist_name from "./ListCard";

export default function ListPanel({ user_name, list_name }) {
    const [user, setUser] = useState('');


    // This method fetches the user's profile from the database
    useEffect(() => {
        async function getUser() {
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
            const user = await response.json();
            setUser(user);
        }
        getUser();
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
                {user.display_name}
            </div>
            <div className="text-x2">
                @{user.user_name}
            </div>
            <div className="py-6">
                <img src={"/profile_pictures/".concat(user.profile_image)} className="rounded-lg"/>
            </div>
            <div>
                <p>{user.description}</p>
            </div>
        </div>
    );
}