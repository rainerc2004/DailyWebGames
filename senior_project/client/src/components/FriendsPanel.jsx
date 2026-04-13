import { useState } from "react";
import ProfileCard from "./ProfileCard";

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
        <div class="flex flex-col overflow-y-scroll px-6 py-6 gap-2 bg-zinc-900 text-white font-semibold rounded-lg text-left">
            <div class="sticky top-0 bg-zinc-900">
                <div class="py-2">
                    Add a friend below:
                </div>
                <div class="flex items-center gap-2">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleEnter}
                        placeholder="Type someone's username."
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                    />
                    <button
                        onClick={addFriend}
                        className="px-2 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                    >
                        +
                    </button>
                </div>
                <div class="py-2">
                    Current friends:
                </div>
            </div>


            <div class="">                
                <ProfileCard user_name={"Sumrall Gaming"} />
                <ProfileCard user_name={"Sumrall Gaming"} />
                <ProfileCard user_name={"Sumrall Gaming"} />
                <ProfileCard user_name={"Sumrall Gaming"} />
                <ProfileCard user_name={"Sumrall Gaming"} />
                <ProfileCard user_name={"Sumrall Gaming"} />
                <ProfileCard user_name={"Sumrall Gaming"} />
                <ProfileCard user_name={"Sumrall Gaming"} />
                <ProfileCard user_name={"Sumrall Gaming"} />
                <ProfileCard user_name={"Sumrall Gaming"} />
            </div>
        </div>
    );
}