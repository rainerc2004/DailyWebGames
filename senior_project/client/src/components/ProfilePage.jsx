import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import GameHistory from "./GameHistory";
import ProfilePanel from "./ProfilePanel";

const ProfilePage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="grid flex flex-1 overflow-hidden grid-cols-5 px-3">
                <div className="flex col-span-1 gap-3 px-6 pb-6">
                    <ProfilePanel user_name="@user"/>
                </div>
                <div className="flex flex-col overflow-y-scroll col-span-3 px-6 pb-6 ">
                    <div className="flex flex-col gap-6">
                        <GameHistory user_name="@user" game_name="Wordle" day={1747}/>
                        <GameHistory user_name="@user" game_name="Octordle" day={1528}/>
                        <GameHistory user_name="@user" game_name="Waffle" day={1531}/>
                        <GameHistory user_name="@user" game_name="Catfishing" day={647}/>
                        <GameHistory user_name="@user" game_name="Queens" day={892}/>
                        {/*<GameHistory />*/}
                        {/*<GameHistory />*/}
                        {/*<GameHistory />*/}
                        {/*<GameHistory />*/}
                        {/*<GameHistory />*/}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfilePage