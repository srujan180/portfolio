function Projects(){
    return(
        <>
        <div > 
<h1 className="font-extrabold size-9 px-7 text-2xl mt-4 ms:m-14 md:px-auto ms:py-auto">Projects </h1>
        </div>

        <div className=" flex rounded-xl w-28 h-16 m-10 bg-black shadow-2xl hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            <a href = "https://divinegpt.onrender.com">
<h1 className="justify-center text-center p-5 text-1xl text-shadow-cyan-50 text-amber-50">DivineGPT</h1></a>


        </div>
        <div className="flex rounded-xl w-auto h-auto bg-white shadow-2xl px-16 m-10 ms:m-auto md:px-auto ms:py-auto">
        <p className="px-auto m-7">Divine GPT is an AI-powered assistant built using LangChain and Gemini API.
It allows users to ask questions, explore information, and receive personalized guidance in a natural, conversational way. The aim is to combine intelligence, simplicity, and accessibility with the power of modern AI.</p>
        </div>

        <div className=" flex rounded-xl w-28 h-16 m-10 bg-black shadow-2xl hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ms:m-14 md:px-auto ms:py-auto">
<h1 className="justify-center text-center p-5 text-1xl text-shadow-cyan-50 text-amber-50">ThinkBook</h1>


        </div>
        <div className="flex rounded-xl w-auto h-auto bg-white shadow-2xl px-16 m-10 ms:m-auto ms:px-auto md:px-auto ms:py-auto">
        <p className=" px-auto m-7">ThinkBook is built using the MERN stack (MongoDB, Express.js, React, and Node.js). The main goal of this project is to provide a digital notebook for managing ideas, projects, and tasks with a clean and user-friendly interface. ThinkBook is not just a project — it’s a step toward building smarter, more productive tools for everyday use.</p>
        </div>
        </>
    )
}

export default Projects;