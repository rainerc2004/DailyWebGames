import { useState } from "react";
import ProfileCard from "./ProfileCard";
import GameHistory from "./GameHistory";
import FriendStub from "./FriendStub";
import FriendStubPending from "./FriendStubPending";

export default function FriendsPanel() {
    const [query, setQuery] = useState("");

    const addFriend = () => {
        //Friend adding here.
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
                        onClick={addFriend}
                        className="px-2 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                    >
                        +
                    </button>
                </div>
            </div>
            <div class="row-span-6 grid flex flex-1 grid-cols-2 gap-6">
                <div class="flex flex-col col-span-1 max-h-[450px] overflow-y-scroll gap-2">
                    <div class="sticky top-0 w-full px-6 py-2 bg-zinc-700 text-white font-semibold">
                        Incoming requests
                    </div>
                    <FriendStubPending user_name="this_user" />
                    <FriendStubPending user_name="this_user" />
                    <FriendStubPending user_name="this_user" />
                    <FriendStubPending user_name="this_user" />
                    <FriendStubPending user_name="this_user" />
                 
                </div>
                <div class="flex flex-col col-span-1 max-h-[450px] overflow-y-scroll gap-2">
                    <div class="sticky top-0 w-full px-6 py-2 bg-zinc-700 text-white font-semibold">
                        Current friends
                    </div>
                    <FriendStub user_name="this_user" />
                    <FriendStub user_name="this_user" />
                    <FriendStub user_name="this_user" />
                    <FriendStub user_name="this_user" />
                    <FriendStub user_name="this_user" />
                    <FriendStub user_name="this_user" />
                    <FriendStub user_name="this_user" />
                    <FriendStub user_name="this_user" />
                    <FriendStub user_name="this_user" />
                    <FriendStub user_name="this_user" />
                    <FriendStub user_name="this_user" />
                    <FriendStub user_name="this_user" />


                </div>
            </div>



            </div>

    );
}