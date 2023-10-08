
import { useLoaderData } from "react-router-dom";
import AboutEvent from "../AboutTheEvent/AboutEvent";
import Navbar from "../Navbar/Navbar";
import CardMain from "../cardmain/CardMain";
import Footer from "../footer/Footer";
import MainHome from "../mainHome/MainHome";


const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className="bg-sky-950 overflow-x-hidden">
            <Navbar></Navbar>
            <MainHome></MainHome>
            <AboutEvent></AboutEvent>

            {/* card section */}
            <div className="grid lg:grid-cols-3 pt-40  justify-center items-center ">
                {
                    data.map(singleData => <CardMain
                        key={singleData._id}
                        data={singleData}
                    ></CardMain>)
                }
            </div>


            <Footer></Footer>

        </div>
    );
};

export default Home;