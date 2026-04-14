import { useState } from "react";

export default function Login() {
    const [query, setQuery] = useState("");

    const handleLogin = () => {
        //handle login
    };

    const handleSignup = () => {
        //handle signup
    };

    return (
        <div className="flex flex-row h-screen items-center justify-center gap-24 text-white font-semibold">
            <div className="flex flex-col gap-3 items-center">
                Log in
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Username"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Password"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <button
                    onClick={handleLogin}
                    className="w-1/2 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                >
                    Log in!
                </button>
            </div>
            <div className="flex flex-col gap-3 items-center">
                Sign up
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter username"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter password"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Confirm password"
                    className="w-96 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg"
                />
                <button
                    onClick={handleSignup}
                    className="w-1/2 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center"
                >
                    Sign up!
                </button>
            </div>
        </div>
    );
}