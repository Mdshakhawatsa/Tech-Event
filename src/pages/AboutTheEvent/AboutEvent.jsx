import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const AboutEvent = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);



    return (
     
        <div   className="max-w-7xl mx-auto font-poppins mt-40 " >

            <div className="w-auto grid lg:flex justify-between">

                <div data-aos="fade-right">
                    <h1 className="text-white font-bold">About The Event</h1>
                    <h1 className="text-blue-100 font-extrabold text-5xl mt-3">Learn The Newest <br /> Strategy Of The <br /> Technology Industry</h1>
                    <div className="h-1 w-48 mt-5 bg-sky-600"></div>
                </div>

                {/*  */}

                <div data-aos="fade-left" className="">
                    <div className=" h-1 w-48 mb-5 mt-5  bg-sky-400"></div>
                    <p className="text-white mb-4">Global Technology Market Size [2030] | Market to Hit  New Heights <br /> of USD 3168.13 Million - [Growing at a CAGR of 25.73%]  </p>
                    <Link to="/learnmore">
                        <button className="btn btn-outline text-white hover:bg-blue-200 hover:text-black">LEARN MORE</button>
                    </Link>
                </div>

            </div>

            <div>
               
            </div>


        </div>
       
    );
};

export default AboutEvent;