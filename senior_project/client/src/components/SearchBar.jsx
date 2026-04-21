import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("");

    // On enter, load search results page with provided query
    const handleSearch = () => {
        console.log("Searching for:", query);
        window.location.href = "/search/?search=".concat(query);
    };

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="flex items-center gap-2">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleEnter}
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