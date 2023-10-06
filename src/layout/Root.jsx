import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-current">

            <div>

                <div className="">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Root;