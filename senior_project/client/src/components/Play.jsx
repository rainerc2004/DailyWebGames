import { Outlet } from "react-router-dom";
import PlayNavbar from "./PlayNavbar";
import Leaderboard from "./Leaderboard";

const Play = () => {
    return (
        <div className="flex flex-col h-screen">
            <PlayNavbar />
            <div className="grid flex-1 grid-cols-5">
                <iframe
                className="col-span-4"
                border="none"
                height="100%"
                width="100%"
                allow="clipboard-write; picture-in-picture full"
                src="https://www.nytimes.com/games/wordle/index.html">
                </iframe>

                <div className="flex flex-col col-span-1 flex-end justify-end gap-2 px-6 py-6">
                    <Leaderboard />
                    <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Paste Score!
                    </button>
                    <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                        Next Game!
                    </button>
                </div>
            </div>

        </div>
    );
};
export default Play
