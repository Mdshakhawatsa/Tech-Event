import { BiSolidEditLocation, BiPhoneCall, BiLogoGmail } from "react-icons/bi";
// import { FaMailBulk } from "react-icons/fa6";



import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";


const EventDetails = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div  className="pt-20 h-screen bg-sky-100 font-poppins">
                <div className=" grid lg:flex  justify-around">

                    <div>
                        <h1 className="mb-4">Event Detail</h1>
                        <h2 className=" text-5xl font-poppins font-semibold">Conference in the <br /> weekend!</h2>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="mt-12 ">
                            <Link to="/tiket">
                                <button className="btn btn-outline bg-blue-700 text-white hover:bg-blue-200 hover:text-black">GET TICKET</button></Link>
                        </div>
                    </div>
                    {/*  */}


                    <div className="pt-3">


                        {/* place */}
                        <div className="flex gap-3  ">
                            <div>
                                <h1 className="text-5xl">
                                    <BiSolidEditLocation></BiSolidEditLocation>
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold mb-2">Place</h1>
                                <p className="text-slate-500">Garuda Wisnu Kencana Cultural Park, Jl. <br />
                                    RayaUluwatu, Kuta,Badung, Bali Indonesia</p>
                            </div>
                        </div>
                        {/* 2 */}

                        <div className="flex gap-3 mt-6">
                            <div>
                                <h1 className="text-5xl">
                                    <BiLogoGmail></BiLogoGmail>
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold mb-2">Mail</h1>
                                <p className="text-slate-500">akamla@gmail.com</p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="flex gap-3 mt-6">
                            <div>
                                <h1 className="text-5xl">
                                    <BiPhoneCall></BiPhoneCall>
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold mb-2">Contact</h1>
                                <p className="text-slate-500">+88013345678</p>
                                <p className="text-slate-500">+88013345678</p>
                            </div>
                        </div>







                    </div>

                </div>


            </div>

        </div>
    );
};

export default EventDetails;