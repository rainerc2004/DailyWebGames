import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <div>
            <nav className="flex items-center justify-between px-6 py-6">
                <div className="flex items-center gap-2">
                    <NavLink to="/home" className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                         Home
                    </NavLink>
                    <SearchBar /> 
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
