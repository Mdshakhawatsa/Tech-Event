import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-7xl font-poppins  font-bold">404</h1>
                        <p>ERROR</p>
                        <p className="py-6">Tickets will be available 1 week prior to the start of the event .</p>
                        <Link to="/tiket">
                        <button className="btn glass bg-slate-400">Go to home</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Error;