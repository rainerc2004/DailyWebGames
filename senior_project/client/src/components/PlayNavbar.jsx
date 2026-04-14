import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function PlayNavbar({ updateGame }) {
    const [score, setScore] = useState("");

    function handleScore() {
        /*
        const response = fetch(`http://localhost:5050/user/update/user/TestGame/day/${score}`, {
            method: 'PATCH'
        });*/
        return;
    };

    return (
        <div>
            <nav className="flex items-center px-6 gap-3">
                    <NavLink to="/home" className="flex-none px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Home
                    </NavLink>
                    <div class="flex grow overflow-x-auto px-3 py-6 gap-3 bg-zinc-900">
                    <button
                        onClick={function() { updateGame("Wordle")}}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Wordle
                    </button>
                    <button
                        onClick={function() { updateGame("Octordle")}}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Octordle
                    </button>
                    <button
                        onClick={() => updateGame("Metazooa")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Metazooa
                    </button>
                    <button
                        onClick={() => updateGame("Angle")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Angle
                    </button>
                    <button
                        onClick={() => updateGame("Waffle")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Waffle
                    </button>
                    <button
                        onClick={() => updateGame("Linixicon")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Linixicon
                    </button>
                    <button
                        onClick={() => updateGame("Catfishing")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Catfishing
                    </button>
                    <button
                        onClick={() => updateGame("Queens")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Queens
                    </button>
                    </div>
                <div class="flex flex-none gap-3">
                    <input
                        type="text"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                        placeholder="Enter score."
                        className="w-36 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                    />
                    <button onClick={function() {handleScore()}} className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Paste Score!
                    </button>
                    <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Next Game!
                    </button>
                    <NavLink
                        to="/profile"
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                            Profile
                    </NavLink>
                 </div>
            </nav>
        </div>
    );
}
