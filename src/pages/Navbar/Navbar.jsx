import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto font-poppins " >
            <div className="navbar ">
                <div className="navbar-start  ">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <Link>Home</Link>
                            <Link>services</Link>
                            <Link>Speakers</Link>
                            <Link>About US</Link>


                        </div>
                    </div>

                    <h1 className=" normal-case text-1xl lg:text-4xl text-white font-poppins font-bold"><span className="text-blue-200">Tech</span> Event</h1>

                </div>


                    <div className="navbar-center  hidden lg:flex">
                        <div className="menu menu-horizontal text-white gap-5 pr-1">

                            <Link className="hover:underline text-base">Home</Link>
                            <Link className="hover:underline text-base">services</Link>
                            <Link className="hover:underline text-base">Speakers</Link>
                            <Link className="hover:underline text-base">About US</Link>

                        
                    </div>
                </div>

            
                <div className="navbar-end gap-2  mt-6 mb-4">
                    {/* <div className="avatar">
                        <div className="w-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div> */}
                    <button className="btn   sm:btn-sm md:btn-md lg:btn-md">LogIn</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;