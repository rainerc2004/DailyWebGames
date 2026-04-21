import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import GameHistory from "./GameHistory";
import ProfilePanel from "./ProfilePanel";
import FriendsPanel from "./FriendsPanel";

const ProfilePage = () => {
    const [profile, setProfile] = useState('');

    // This method fetches the user's profile from the database
    useEffect(() => {
        async function getProfile() {
            const response = await fetch(`http://localhost:5050/user/profile/${user_name}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const profile = await response.json();
            setProfile(profile);
        }
        getProfile();
        return;
    }, [profile]);

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="grid flex flex-1 overflow-hidden grid-cols-5 px-3">
                <div className="flex col-span-1 gap-3 px-6 pb-6">
                    <ProfilePanel user_name="user" display_user={profile.display_user} profile_user="user"/>
                </div>
                <div className="flex flex-col overflow-y-scroll col-span-2 px-6 pb-6 ">
                    <div className="flex flex-col gap-6">
                        <GameHistory user_name="user" display_user={profile.display_user} profile_user="user" game_name="Wordle" day={1747}/>
                        <GameHistory user_name="user" display_user={profile.display_user} profile_user="user" game_name="Octordle" day={1528}/>
                        <GameHistory user_name="user" display_user={profile.display_user} profile_user="user" game_name="Waffle" day={1531}/>
                        <GameHistory user_name="user" display_user={profile.display_user} profile_user="user" game_name="Framed" day={1502}/>
                        <GameHistory user_name="user" display_user={profile.display_user} profile_user="user" game_name="Globle" day={952}/>
                        <GameHistory user_name="user" display_user={profile.display_user} profile_user="user" game_name="Timdle" day={892}/>
                        <GameHistory user_name="user" display_user={profile.display_user} profile_user="user" game_name="Linixicon" day={792}/>
                        <GameHistory user_name="user" display_user={profile.display_user} profile_user="user" game_name="Angle" day={1393}/>
                        <GameHistory user_name="user" display_user={profile.display_user} profile_user="user" game_name="Metazooa" day={988}/>
                        <GameHistory user_name="user" display_user={profile.display_user} profile_user="user" game_name="Breadle" day={1519}/>
                    </div>
                </div>
                <div className="flex col-span-2 gap-3 px-6 pb-6">
                    <FriendsPanel user_name="user" display_user={profile.display_user} profile_user="user"/>
                </div>
            </div>
        </div>
    );
};
export default ProfilePage