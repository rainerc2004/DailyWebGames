import { AuthProvider } from "./contexts/AuthContext";
import { Outlet } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="flex flex-col h-screen">
            <AuthProvider>
                <Navbar />
                <Homepage />
            </AuthProvider> 
        </div>
    );
};
export default App
