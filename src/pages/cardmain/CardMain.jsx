/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const CardMain = ({ data }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

  

    const { title, image, place, date } = data;
    

    return (
        <div className="">

            <div data-aos="zoom-in" className="card w-96   bg-base-100 shadow-xl m-10">
                <figure><img className="h-80 w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-poppins">{title}</h2>
                    <h2>{place}</h2>
                    <h2>{date}</h2>
                    {/* <p>{description}</p> */}
                    <button className="btn btn-primary normal-case font-poppins ">Details</button>

                </div>
            </div>



        </div>
    );
};

export default CardMain;