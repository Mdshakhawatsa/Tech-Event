/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import CardS from "./CardS";

const Services = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/fakedata.json')
            .then(rsc => rsc.json())
            .then(data => setJobs(data));
    }, [])




    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            {/* <h2 className="card-title font-poppins">{jobs.length}</h2> */}

            <div  className="grid lg:grid-cols-3   justify-center items-center">

            {
                jobs.map(job => <CardS key={job.id} job={job}></CardS>)
            }

            </div>

        </div>


    );
};

export default Services;


{/* <div data-aos="zoom-in" className="card w-96   bg-base-100 shadow-xl m-10">
                <figure><img className="h-80 w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-poppins">{title}</h2>
                    <h2>{place}</h2>
                    <h2>{date}</h2>
                   
                    <button className="btn btn-primary normal-case font-poppins ">Details</button>

                </div>
            </div> */}