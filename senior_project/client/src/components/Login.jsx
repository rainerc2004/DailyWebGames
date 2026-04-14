import { useState } from "react";
//import { useAuth } from "../contexts/AuthContext";

export default function Login() {
    //const { login } = useAuth();

    const [login_username, setLoginUsername] = useState("");
    const [login_password, setLoginPassword] = useState("");
    const [signup_username, setSignupUsername] = useState("");
    const [signup_password, setSignupPassword] = useState("");
    const [signup_confirm, setSignupConfirm] = useState("");

    const [login_message, setLoginMessage] = useState("");
    const [signup_message, setSignupMessage] = useState("");


    async function handleLogin(username, password) {
        const response = await fetch(`http://localhost:5050/user/login/${username}/${password}`, {
            method: 'GET'
        });
        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            console.error(message);
            setLoginMessage("Username or password is incorrect!");
            return;
        }
        setLoginMessage("Logging in!");
        window.location.href = "/home";
        //login({ name: "user" });
    };

    async function handleSignup(username, password, confirm) {
        if(username == "" || password == "" || confirm == "") { 
            return; 
        }
        if(password != confirm) {
            setSignupMessage("Passwords don't match!");
            return;
        }
        if(username.length > 32) {
            setSignupMessage("Username can't be more than 32 characters!");
            return;
        }
        if(password.length < 8 || password.length > 32) {
            setSignupMessage("Password must be between 8 and 32 characters!");
            return;
        }
        const response = await fetch(`http://localhost:5050/user/sign_up/${username}/${password}`, {
            method: 'POST'
        });
        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            console.error(message);
            setSignupMessage("Username already exists!");
            return;
        }
        setSignupMessage("Account created!");
        window.location.href = "/home";
        //login({ name: "user" });
    };

    return (
        <div className="flex flex-row h-screen items-center justify-center gap-24 text-white font-semibold">
            <div className="flex flex-col gap-3 items-center">
                Log in
                <input
                    type="text"
                    value={login_username}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    placeholder="Username"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <input
                    type="text"
                    value={login_password}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Password"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <button
                    onClick={function() {handleLogin(login_username, login_password)}}
                    className="w-1/2 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                >
                    Log in!
                </button>
                {login_message}
            </div>
            <div className="flex flex-col gap-3 items-center">
                Sign up
                <input
                    type="text"
                    value={signup_username}
                    onChange={(e) => setSignupUsername(e.target.value)}
                    placeholder="Enter username"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <input
                    type="text"
                    value={signup_password}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <input
                    type="text"
                    value={signup_confirm}
                    onChange={(e) => setSignupConfirm(e.target.value)}
                    placeholder="Confirm password"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <button
                    onClick={function() {handleSignup(signup_username, signup_password, signup_confirm)}}
                    className="w-1/2 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                >
                    Sign up!
                </button>
                {signup_message}
            </div>
        </div>
    );
}