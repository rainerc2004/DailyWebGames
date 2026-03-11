import { NavLink } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function PlayNavbar({ updateSite }) {
    return (
        <div>
            <nav className="flex items-center justify-between px-6 py-6">
                <div className="flex items-center gap-2">
                    <NavLink to="/" className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Home
                    </NavLink>
                    <button
                        onClick={() => updateSite("https://www.nytimes.com/games/wordle/index.html") }
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Wordle
                    </button>
                    <button
                        onClick={() => updateSite("https://www.linkedin.com/games/tango/")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Tango
                    </button>
                    <button
                        onClick={() => updateSite("https://catfishing.net/")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Catfishing
                    </button>
                </div>
                <NavLink className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                    Profile
                </NavLink>
            </nav>
        </div>
    );
}
