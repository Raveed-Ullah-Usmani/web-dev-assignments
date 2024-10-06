import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main">
                <Navbar />
                <Dashboard />
                <Footer />
            </div>
        </div>
    );
}

export default Home;

