import { useState } from "react";
import Navbar from "./Navbar";


export default function EditList() {
    const urlParams = new URLSearchParams(window.location.search);
    const current_listname = urlParams.get('list');

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSave = () => {
        //handle login
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
        <div className="flex items-center justify-center gap-24 text-white font-semibold">
            <div className="flex flex-col gap-3 items-center">
                    Update "{current_listname}"
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Set a new list name"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Set a new list description"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg field-sizing-content"
                    rows="10"
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