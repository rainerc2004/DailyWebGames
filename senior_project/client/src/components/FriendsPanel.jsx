import { useEffect, useState } from "react";
import FriendListAdded from "./FriendListAdded";
import FriendListPending from "./FriendListPending";


export default function FriendsPanel({user_name, profile_user}) {
    const [query, setQuery] = useState("");

    // Fetch all friends (user_name_2) of user_name (user_name_1)
    async function addFriend (user_name_1, user_name_2) {
        const response = await fetch(`http://localhost:5050/friend/add/${user_name_1}/${user_name_2}/pending`, {
            method: 'POST'
        });
        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            console.error(message);
            return;
        }
    };

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            addFriend();
        }
    };

    return (
        <div class="grid grid-rows-7 bg-zinc-900 text-white font-semibold rounded-lg text-left w-full h-full px-6 py-6 gap6">
            <div class="row-span-1">
                <div class="py-2">
                    Add a friend below:
                </div>
                <div class="flex items-center gap-6">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleEnter}
                        placeholder="Type someone's username"
                        className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                    />
                    <button
                        onClick={function() {addFriend(user_name, query)}}
                        className="px-2 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                    >
                        +
                    </button>
                </div>
            </div>
            <div class="row-span-6 grid flex flex-1 grid-cols-2 gap-6">
                <div class="flex flex-col col-span-1 max-h-[525px] overflow-y-scroll gap-2">
                    <FriendListPending user_name="user" profile_user="user" />
                 
                </div>
                <div class="flex flex-col col-span-1 max-h-[525px] overflow-y-scroll gap-2">
                    <FriendListAdded user_name="user" profile_user="user" />
                </div>
            </div>
        </div>
    );
}