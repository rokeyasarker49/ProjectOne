import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className="px-8 md:px-[200px] mt-8">
            <div className="flex justify-between items-center ">
                <h1 className="text-2xl font-bold text-black md:text-3xl">10 uses of Artificial Intelligence in Day to Day life</h1>
                <div className="flex items-center justify-center space-x-2">
                    <p><FaEdit /></p>
                    <p><MdDelete /></p>
                </div>
                
            </div>
            <div className="flex items-center justify-between mt-2 md:mt-4">
                <p>RokeyaDev</p>
                <div className="flex space-x-2">
                    <p>07/02/2023</p>
                    <p>10:55</p>
                </div>
            </div>
            <img src="" alt="" className="w-full mx-auto mt-8"/>
            <p className="mx-auto mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos illum tempore, delectus ipsa amet iure at a voluptatem repellat accusantium ab magni quam nemo mollitia similique autem placeat? Alias recusandae doloremque velit laboriosam accusamus laborum soluta, similique asperiores est voluptate quisquam mollitia, repellendus non qui aperiam quod unde perferendis </p>
            <div className="flex items-center mt-8 space-x-4 font-semibold">
                <p>Categories:</p>
                <div className="flex justify-center items-center space-x-2">
                    <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                    <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
                </div>
            </div>
            <div className="flex flex-col mt-4">
                <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
                {/* comment */}
                <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-600">RokeyaDev</h3>
                        <div className="flex justify-center items-center space-x-4">
                            <p className="text-gray-500 text-sm">07/02/2024</p>
                            <p className="text-gray-500 text-sm">10:20</p>
                            <div className="flex items-center justify-center space-x-2">
                                <p><FaEdit /></p>
                                <p><MdDelete /></p>
                             </div>
                        </div>
                        
                    </div>
                    <p className="px-4 mt-2">Nice Information!!</p>
                </div>
                {/* comment */}
                <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-600">RokeyaDev</h3>
                        <div className="flex justify-center items-center space-x-4">
                            <p className="text-gray-500 text-sm">07/02/2024</p>
                            <p className="text-gray-500 text-sm">10:20</p>
                            <div className="flex items-center justify-center space-x-2">
                                <p><FaEdit /></p>
                                <p><MdDelete /></p>
                             </div>
                        </div>
                        
                    </div>
                    <p className="px-4 mt-2">Nice Information!!</p>
                </div>
            </div>
            {/* write a comment */}
            <div className="flex flex-col mt-4 md:flex-row">
                <input className="md:w-[80%] outline-none px-4 mt-4 md:mt-0" type="text" placeholder="Write a comment"/>
                <button className="bg-black text-sm text-white px-4 py-2 md:mt-0 mt-4 md:w-[20%] hover:text-black hover:bg-gray-500 hover:text-md">Add a comment</button>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails