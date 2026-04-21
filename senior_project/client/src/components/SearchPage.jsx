import Navbar from "./Navbar";
import SearchResultsUser from "./SearchResultsUser";
import SearchResultsList from "./SearchResultsList";
import SearchResultsGame from "./SearchResultsGame";


const SearchPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="grid flex flex-1 overflow-hidden grid-cols-3 px-3">
                
                <SearchResultsUser search={search}/> {/* User profile search results */}

                <SearchResultsList search={search}/> {/* List search results */}

                <SearchResultsGame search={search}/> {/* Game search results */}

            </div>
        </div>
    );
};
export default SearchPage