import { Link } from "react-router-dom"
import Footer from "../components/Footer"


const Register = () => {
  return (
    <>
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold "><Link to="/">Blog Market</Link></h1>
      <h3><Link to="/login">LogIn</Link></h3>
    </div>
    <div className="w-full flex justify-center items-center h-[70vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
            <h1 className="text-xl font-bold text-left">Create an Account</h1>
            <input className="w-full px-4 py-2 border-2 outline-0 border-black" type="text" placeholder="Enter Your UserName"/>
            <input className="w-full px-4 py-2 border-2 outline-0 border-black" type="text" placeholder="Enter Your Email"/>
            <input className="w-full px-4 py-2 border-2 outline-0 border-black" type="password" placeholder="Enter Your Password"/>
            <button className="w-full px-4 py-4 text-lg font-bold text-white bg-black  rounded-lg hover:bg-gray-500 hover:text-black">Register</button>
            <div className="flex justify-center items-center space-x-3">
                <p>Already have an account?</p>
                <p className="text-gray-600 hover:text-black"><Link to="/login">LogIn</Link></p>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Register