

const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src="" alt="" className="h-full w-full object-cover"/>
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:txt-2xl">
          10 uses of Artificial Intelligence in Day to Day life
        </h1>
        <div className="flex mb-2 font-semibold text-gray-500 space-x-4 md:mb-4 items-center justify-between">
          <p>RokeyaDev</p>
          <div className="flex space-x-2">
            <p>07/02/2023</p>
            <p>10:55</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">Artificial intelligence (AI), the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings. The term is frequently applied to the project of developing systems endowed with the intellectual processes characteristic of humans, such as the ability to reason, discover meaning, generalize, or learn from past experience.</p>

      </div>

    </div>
  )
}

export default ProfilePosts