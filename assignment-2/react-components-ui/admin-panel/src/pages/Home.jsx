import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

const Home = () => {
    return (
        <Router>
            <div className="wrapper">
                <Sidebar />
                <div className="main">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default Home;

