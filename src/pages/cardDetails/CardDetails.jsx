import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const CardDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job._id === idInt);
    console.log(job);




    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="bg-sky-100 h-full">


                <div className="card ">
                    <figure className="px-10 pt-10">
                        {/* <img src={job.image} alt="Shoes" className=" w-80 h-80 rounded-xl" /> */}
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-poppins font-bold text-4xl">{job.title}</h2>
                        <p className="font-poppins">{job.place}</p>
                        <p>{job.date}</p>

                    </div>
                </div>


                {/*  */}
                <div className="card lg:card-side ">
                    <figure><img src={job.image} alt="Album" /></figure>
                    <div className="card-body w-5/6">
                        <h2 className="card-title  ">{job.description}</h2>
                        <p >{job.description}</p>
                        {/* <p>{job.paragraphs}</p> */}
                        <div className="card-actions justify-end">
                            <Link to="/card">
                                <button className="btn btn-primary">Back</button>
                            </Link>

                        </div>
                    </div>
                </div>




            </div>


        </div>
    );
};

export default CardDetails;