import { useState } from "react";
import Navbar from "./Navbar";


export default function EditProfile({current_username="test"}) {
    const [username, setUsername] = useState("");
    const [displayname, setDisplayname] = useState("");
    const [bio, setBio] = useState("");
    const [pfp, setPfp] = useState("");

    const handleSave = () => {
        //handle login
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
        <div className="flex items-center justify-center gap-24 text-white font-semibold">
            <div className="flex flex-col gap-3 items-center">
                    Update your profile, @{current_username}
                <input
                    type="text"
                    value={displayname}
                    onChange={(e) => setDisplayname(e.target.value)}
                    placeholder="Set a new display name"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Set a new username"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Set a new bio"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg field-sizing-content"
                    rows="10"
                />
                <input
                    type="text"
                    value={pfp}
                    onChange={(e) => setPfp(e.target.value)}
                    placeholder="Link to a new profile photo"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <button
                    onClick={handleSave}
                    className="w-1/2 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                >
                    Save changes
                </button>
            </div>
            </div>
        </div>
    );
}