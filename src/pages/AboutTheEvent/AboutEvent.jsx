import { Link } from "react-router-dom";

const AboutEvent = () => {
    return (
        <div className="max-w-7xl mx-auto font-poppins mt-40 " >

            <div className="w-auto grid lg:flex justify-between">

                <div>
                    <h1 className="text-white font-bold">About The Event</h1>
                    <h1 className="text-white font-extrabold text-5xl mt-3">Learn The Newest <br /> Strategy Of The <br /> Technology Industry</h1>
                    <div className="h-1 w-48 mt-5 bg-sky-600"></div>
                </div>

                {/*  */}

                <div className="">
                    <div className=" h-1 w-48 mb-5 mt-5  bg-sky-400"></div>
                    <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur Lorem <br /> ipsum dolor sit amet consectetur  Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. Quod, repellat?</p>
                    <Link>
                        <button className="btn btn-outline text-white hover:bg-blue-200 hover:text-black">LEARN MORE</button>
                    </Link>
                </div>

            </div>

            <div>
                vvv <br />
                vvv <br />
                vvv <br />
                vvv <br />
                vvv <br />
                vvv <br />
                vvv <br />
                vvv <br />
                vvv
                vvv
                vvv
                vvv
                vvv
                vvv
                vvv
                vvv
                vvv
                vvv
            </div>




        </div>
    );
};

export default AboutEvent;