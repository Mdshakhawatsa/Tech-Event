/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CardS = ({ job }) => {
    const { _id, title , image, place, date} = job;


    return (
        <div className=" bg-sky-100">
            


            <div data-aos="zoom-in" className="card w-96   bg-sky-100  shadow-xl m-10">
                <figure><img className="h-80 w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-poppins">{title}</h2>
                    <h2>{place}</h2>
                    <h2>{date}</h2>
                    {/* <p>{description}</p> */}
                  <Link to={`/details/${_id} `}>
                  <button  className="btn glass bg-slate-400 w-40 normal-case font-poppins ">Details</button>
                  </Link>

                </div>
            </div>











        </div>
    );
};

export default CardS;