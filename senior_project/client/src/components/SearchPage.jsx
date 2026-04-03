import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
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
                <div className="flex flex-col overflow-y-scroll col-span-1 px-6 pb-6 gap-6">
                    <div className="sticky px-6 top-0 bg-gray-300 font-semibold rounded-lg text-left">
                        <div className="text-xl py-6">
                            Profile search results for "{search}"
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                    </div>
                </div>
                <div className="flex flex-col overflow-y-scroll col-span-1 px-6 pb-6 gap-6">
                    <div className="sticky px-6 top-0 bg-gray-300 font-semibold rounded-lg text-left">
                        <div className="text-xl py-6">
                            List search results for "{search}"
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                    </div>
                </div>
                <div className="flex flex-col overflow-y-scroll col-span-1 px-6 pb-6 gap-6">
                    <div className="sticky px-6 top-0 bg-gray-300 font-semibold rounded-lg text-left">
                        <div className="text-xl py-6">
                            Game search results for "{search}"
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SearchPage