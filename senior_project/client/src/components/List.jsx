import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import GameCard from "./GameCard";
import ListPanel from "./ListPanel";

const List = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const list_name = urlParams.get('list');

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="grid flex flex-1 overflow-hidden grid-cols-5 px-3">
                <div className="flex col-span-1 gap-3 px-6 pb-6">
                    <ListPanel user_name="user" />
                </div>
                <div className="flex flex-col overflow-y-scroll col-span-3 px-6 pb-6 ">
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
                        <GameCard />
                    </div>
                </div>

            </div>
        </div>
    );
};
export default List