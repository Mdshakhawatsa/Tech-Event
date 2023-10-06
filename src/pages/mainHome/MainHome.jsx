
const MainHome = () => {
    return (
        <div>



            <div className="hero min-h-screen bg-base-200">
                <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://www.travelperk.com/wp-content/uploads/alexandre-pellaes-6vAjp0pscX0-unsplash-1-1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content flex-col lg:flex-row h-auto pb-16">
                        <div className="lg:pr-96 ">
                            <p className="mb-6 font-semibold font-poppins text-blue-100">Biggest Tech Event</p>

                            <div className="flex gap-2 mb-4">
                                <div className="w-1 bg-white"></div>
                                <h1 className="text-5xl text-blue-100 font-poppins   font-bold">Growing The Global <br /> Technology Industry</h1>
                            </div>

                            <p className="pt-5  font-poppins text-gray-300">But I must explain to you how all this mistaken idea of denouncing pleasure and <br />
                                praising pain was born and I will give you a complete account of the system.</p>
                            {/*  */}


                            <div className="card w-4/5 glass mt-4 ">

                                <div className="flex">
                                    <div className="card-body">
                                        <h2 className="card-title font-poppins font-semibold text-white">December 27, 2023</h2>
                                        <p className="text-gray-300 text-xs lg:text-base">Garuda Wisnu Kencana Cultural Park, Jl.<br /> RayaUluwatu, Kuta,Badung, Bali Indonesia</p>
                                    </div>
                                    <div className="mt-12 mr-2">
                                        <button className="btn btn-outline text-white hover:bg-blue-200 hover:text-black">GET TICKET</button>
                                    </div>
                                </div>

                            </div>

                            {/*  */}

                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default MainHome;