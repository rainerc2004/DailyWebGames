import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        console.log("Searching for:", query);
        // TODO: CONNECT TO BACKEND TO SEARCH DATABASES OF GAMES, USERS, AND LISTS!
    };

    return (
        <div className="flex items-center gap-2">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search games, lists, and users."
                className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
            />
            <button
                onClick={handleSearch}
                className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
            >
                Search!
            </button>
        </div>
    );
}