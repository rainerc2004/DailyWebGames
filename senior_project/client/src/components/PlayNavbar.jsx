import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function PlayNavbar({ updateGame }) {
    return (
        <div>
            <nav className="flex items-center justify-between px-6 py-6">
                <div className="flex items-center gap-2">
                    <NavLink to="/" className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Home
                    </NavLink>
                    <button
                        onClick={() => updateGame("Wordle")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Wordle
                    </button>
                    <button
                        onClick={() => updateGame("Octordle")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Octordle
                    </button>
                    <button
                        onClick={() => updateGame("Waffle")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Waffle
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
                <NavLink
                    to="/profile"
                    className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                    Profile
                 </NavLink>
            </nav>
        </div>
    );
}
