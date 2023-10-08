import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";



const Login = () => {
// 
const auth = getAuth (app);
const provider = new GoogleAuthProvider();
const handleGoogleSignIn = () =>{
  signInWithPopup(auth, provider)
  .then(result =>{
    const user = result.user;
    console.log(user);
  })
  .catch(error =>{
    console.log('error', error.message)
  })
}




// 







    const { signIn } = useContext(AuthContext);


    const handelLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.erroe(error);
        })
    }


    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl  mx-auto bg-white rounded-lg font-poppins border ">
                <div>
                    <h1 className="text-center pt-5 font-bold text-5xl font-poppins	">Log In</h1>
                    <h1 className="text-center pt-5  text-1xl font-poppins">Don`t have an account? <Link to="/signup" className="text-blue-600 underline">Sign Up</Link></h1>
                </div>


                <div className="lg:flex justify-around grid-cols-1 ">

                    <div>
                        <div className="hero min-h-screen ">
                            <div >
                                <div className="card flex-shrink-0  w-96 shadow-md bg-base-100">

                                    <form onSubmit={handelLogin} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6">

                                            <button className="btn btn-outline btn-primary">Login</button>

                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  */}

                    <div className="h-40 w-1 bg-gray-700 mt-60 hidden lg:block   "> </div>

                    {/*  */}
                    <div className="hero-content  lg:p-1   lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline ">
                                <FcGoogle className="text-3xl"></FcGoogle>
                                Continue with Google
                            </button>

                        </div>
                    </div>


                </div>




            </div>


        </div>
    );
};

export default Login;