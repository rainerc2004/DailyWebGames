import { Outlet } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <Homepage />
        </div>
    );
};
export default App
