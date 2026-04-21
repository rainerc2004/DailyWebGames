import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import '../css/EditProfile.css'


export default function EditProfile({current_username="user"}) {
    const [displayname, setDisplayname] = useState("");
    const [bio, setBio] = useState("");
    const [message, setMessage] = useState("");
    const [profile, setProfile] = useState('');
    
    // This method fetches the user's profile from the database
    useEffect(() => {
        async function getProfile() {
            const response = await fetch(`http://localhost:5050/user/profile/${current_username}`, {
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

    // Send the changes to the database
    async function submitChanges() {
        let updated = false;
        if (displayname != "") {
            if (displayname.length > 24) {
                setMessage("Display name must not be more than 24 characters in length!");
                return;
            }
            // Update the display name
            const response = await fetch(`http://localhost:5050/user/update_displayname/${current_username}/${displayname}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            updated = true;
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
        }
        if (bio != "") {
            if (bio.length > 64) {
                setMessage("Description must not be more than 64 characters in length!");
                return;
            }
            // Update the profile bio
            const response = await fetch(`http://localhost:5050/user/update_bio/${current_username}/${bio}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            updated = true;
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
        }
        if (updated) {
            setMessage("Profile Updated!");
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
        <div className="flex items-center justify-center gap-24 text-white font-semibold">
            <div className="flex flex-col gap-3 items-center">
                <br></br>
                <br></br>
                <div className="title-text">
                    Update your profile, @{profile.display_user}
                </div>
                <input
                    type="text"
                    value={displayname}
                    onChange={(e) => setDisplayname(e.target.value)}
                    placeholder="Set a new display name"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Set a new bio"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg field-sizing-content"
                    rows="5"
                />
                <button
                    onClick={function() {submitChanges()}}
                    className="w-1/2 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                >
                    Save changes
                </button>
                <br></br>
                {message}
            </div>
            </div>
        </div>
    );
}