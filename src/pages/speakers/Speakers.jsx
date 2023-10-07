
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";



const Speakers = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);



    return (
        <div className="">

            <div>
                <Navbar></Navbar>
            </div>


            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.travelperk.com/wp-content/uploads/alexandre-pellaes-6vAjp0pscX0-unsplash-1-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-2xl font-poppins">Our Speakers</h1>
                        <h1 className="mb-16 text-5xl font-poppins font-bold">Meet  Keynotes  Speakers</h1>


                        {/* 1 */}
                        <div  className=" grid lg:flex  gap-2">
                            <div data-aos="fade-right" className="card  w-96  shadow-xl glass">
                                <figure className="px-10 pt-10">
                                    <img src="https://i.ibb.co/6r0hsvj/Speaker-1.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title font-poppins">Adam Leno</h2>
                                    <p>CEO UrbanTech</p>

                                </div>
                            </div>

                            {/* 2 */}

                            <div className="card w-96  glass shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://i.ibb.co/Y720CmM/Speaker-2.jpg  " alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title font-poppins">Anne Claire</h2>
                                    <p>CEO IndoTech Ltd</p>

                                </div>
                            </div>
                            {/* 3 */}
                            <div data-aos="fade-left" className="card w-96 glass shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://i.ibb.co/xMqPpTq/Speaker-3.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title font-poppins">Garrett Ventura</h2>
                                    <p>CEO Unicorn</p>

                                </div>
                            </div>


                        </div>







                    </div>
                </div>
            </div>



      
        </div>
    );
};

export default Speakers;