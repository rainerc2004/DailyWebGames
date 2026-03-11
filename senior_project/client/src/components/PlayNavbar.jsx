import { NavLink } from "react-router-dom";
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
                        onClick={() => updateSite("https://www.britannica.com/games/octordle/daily")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Octordle
                    </button>
                    <button
                        onClick={() => updateSite("https://wafflegame.net/daily")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Waffle
                    </button>
                    <button
                        onClick={() => updateSite("https://catfishing.net/")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Catfishing
                    </button>
                    <button
                        onClick={() => updateSite("https://www.linkedin.com/games/queens")}
                        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Queens
                    </button>
                </div>
                <NavLink className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                    Profile
                </NavLink>
            </nav>
        </div>
    );
}
