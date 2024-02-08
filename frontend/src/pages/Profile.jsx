import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProfilePosts from "../components/ProfilePosts"


const Profile = () => {
  return (
    <div>
        <Navbar/>
        <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
            <div className="flex flex-col md:w-[70%] mt-8 w-full md:mt-0">
                <h1 className="text-xl font-bold mb-4">Your Posts:</h1>
                <ProfilePosts/>
                <ProfilePosts/>
                <ProfilePosts/>
                <ProfilePosts/>
                <ProfilePosts/>
            </div>
            <div className="flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end">
                <div className="flex flex-col space-y-4 items-start">
                    <h1 className="text-xl font-bold mb-4">Profile</h1>
                    <input className="border-2 outline-0 border-black px-4 py-2 text-gray-500" placeholder="Your username" type="text"/>
                    <input className="border-2 outline-0 border-black px-4 py-2 text-gray-500" placeholder="Your Email" type="email"/>
                    <input className="border-2 outline-0 border-black px-4 py-2 text-gray-500" placeholder="Your Password" type="password"/>
                    <div className="flex items-center space-x-4 mt-8">
                        <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400" >Update</button>
                        <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400" >Delete</button>
                    </div>

                </div> 

               
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Profile