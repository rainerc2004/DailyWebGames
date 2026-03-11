import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";

const LeaderboardPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="grid flex flex-col flex-1 items-start justify-start grid-cols-5 px-3">
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6">
                    <Leaderboard />
                    <Leaderboard />
                </div>
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6">
                    <Leaderboard />
                    <Leaderboard />
                </div>
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6">
                    <Leaderboard />
                </div>
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6">
                    <Leaderboard />
                </div>
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6">
                    <Leaderboard />
                </div>
            </div>
        </div>
    );
};
export default LeaderboardPage
