import { NavLink } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center gap-2">
            <NavLink className="w-[36rem] px-6 py-[6rem] bg-gray-300 text-black font-semibold rounded-lg shadow hover:bg-gray-200 active:scale-95 transition text-center text-6xl">
                Play my dailies!
            </NavLink>
            <NavLink className="w-[36rem] px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-400 active:scale-95 transition text-center">
                See my friends' scores!
            </NavLink>
        </div>

    );
}