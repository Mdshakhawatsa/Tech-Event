import AboutEvent from "../AboutTheEvent/AboutEvent";
import Navbar from "../Navbar/Navbar";
import MainHome from "../mainHome/MainHome";

const Home = () => {
    return (
        <div className="bg-sky-950">
            <Navbar></Navbar>
            <MainHome></MainHome>
            <AboutEvent></AboutEvent>
        </div>
    );
};

export default Home;