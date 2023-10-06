import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-blue-900">

            <div>

                <div className="">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Root;