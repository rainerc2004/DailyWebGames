import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SearchResultsUser from "./SearchResultsUser";
import SearchResultsList from "./SearchResultsList";
import SearchResultsGame from "./SearchResultsGame";
import ProfileCard from "./ProfileCard";
import GameCard from "./GameCard";
import ListCard from "./ListCard";
import GameHistory from "./GameHistory";

const SearchPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="grid flex flex-1 overflow-hidden grid-cols-3 px-3">
                
                <SearchResultsUser search={search}/>

                <SearchResultsList search={search}/>

                <SearchResultsGame search={search}/>

            </div>
        </div>
    );
};
export default SearchPage