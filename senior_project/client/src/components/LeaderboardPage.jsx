import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";

const LeaderboardPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="grid flex flex-col flex-1 items-start justify-start grid-cols-5 px-3">
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6">
                    <Leaderboard game_name="Wordle" user_name="user" day={1747}/>
                    {<Leaderboard game_name="Octordle" user_name="user" day={1528}/> }
                </div>
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6">
                    <Leaderboard game_name="Waffle" user_name="user" day={1531}/>
                    {<Leaderboard game_name="Catfishing" user_name="user" day={647}/>}
                </div>
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6">
                    {<Leaderboard game_name="Queens" user_name="user" day={892}/>}
                </div>
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6">
                    {/*<Leaderboard />*/}
                </div>
                <div className="flex flex-col col-span-1 flex-end justify-end gap-6 px-3 pb-6">
                    {/*<Leaderboard />*/}
                </div>
            </div>
        </div>
    );
};
export default LeaderboardPage
