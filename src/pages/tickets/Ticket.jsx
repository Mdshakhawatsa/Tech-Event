import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Ticket = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>


            {/*  */}
            <div className="bg-white">
                <div className="pt-8  text-center">
                    <h1 className="font-poppins font-medium text-1xl mb-4">Pricing Package</h1>
                    <h1 className="font-poppins font-bold text-4xl">Get Your Ticket Now!</h1>
                </div>
                {/*  */}

                <div className="mt-10 grid lg:flex justify-center gap-5">
                    {/* 1 */}
                    <div className="card w-96 bg-sky-100 shadow-xl">
                        <div className="card-body  ">
                            <h2 className="card-title">Silver</h2>
                            <h2 className="text-5xl font-poppins font-bold ">$150</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="w-40 h-1 bg-sky-700 mt-4"></div>

                            <h1 className="font-poppins">✔  Free Delivery</h1>
                            <h1 className="font-poppins">✔  Conference Access</h1>
                            <h1 className="font-poppins text-slate-400">✔  Access to exhibition floor</h1>
                            <h1 className="font-poppins text-slate-400">✔  6 Bouquets per Month</h1>

                            <Link to={`/erroor`}>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </Link>

                        </div>
                    </div>
                    {/* 2 */}
                    <div className="card w-96 bg-sky-100 shadow-xl">
                        <div className="card-body  ">
                            <h2 className="card-title">Gold</h2>
                            <h2 className="text-5xl font-poppins font-bold ">$250</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            <div className="w-40 h-1 bg-sky-700 mt-4"> </div>
                            <h1 className="font-poppins">✔  Free Delivery</h1>
                            <h1 className="font-poppins">✔  Conference Access</h1>
                            <h1 className="font-poppins">✔  Access to exhibition floor</h1>
                            <h1 className="font-poppins text-slate-400">✔  6 Bouquets per Month</h1>
                          
                            <Link to={`/erroor`}>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </Link>

                        </div>
                    </div>

                    {/* 3 */}
                    <div className="card w-96 bg-sky-100 shadow-xl">
                        <div className="card-body  ">
                            <h2 className="card-title">Platinum</h2>
                            <h2 className="text-5xl font-poppins font-bold ">$350</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="w-40 h-1 bg-sky-700 mt-4"> </div>

                            <h1 className="font-poppins">✔  Free Delivery</h1>
                            <h1 className="font-poppins">✔  Conference Access</h1>
                            <h1 className="font-poppins">✔  Access to exhibition floor</h1>
                            <h1 className="font-poppins">✔  6 Bouquets per Month</h1>

                            <Link to={`/erroor`}>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/*  */}


                </div>

                {/*  */}



            </div>

        </div>
    );
};

export default Ticket;