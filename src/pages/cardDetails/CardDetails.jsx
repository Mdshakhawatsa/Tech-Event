import { useLoaderData, useParams } from "react-router-dom";
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

            <div className="bg-sky-100 h-screen">



                <h1>
                    <div className="card ">
                        <figure className="px-10 pt-10">
                            <img src={job.image} alt="Shoes" className=" w-80 h-80 rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{job.title}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </h1>


            </div>


        </div>
    );
};

export default CardDetails;