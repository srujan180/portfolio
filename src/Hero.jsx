import ProfileImage from "../src/assets/gen.png";

function Hero() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 my-16 sm:my-24 md:my-32 text-center sm:text-left">
      {/* Text Content - Responsive */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
          Srujan Annam.
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-700">
          MERN Developer.
        </h1>
       
        
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-8">
          <span className="text-red-600 text-xl sm:text-2xl font-medium">Code</span>
          <span className="text-green-600 text-xl sm:text-2xl font-medium">• Create</span>
          <span className="text-orange-500 text-xl sm:text-2xl font-medium">• Deploy.</span>
        </div>
      </div>

      {/* Profile Image - Responsive Positioning */}
      <div className="relative max-w-4xl mx-auto mt-80 md:mt-0">
        <div className="flex justify-center sm:justify-end -mt-70">
          <img 
            src={ProfileImage}
            alt="Srujan Annam"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white shadow-xl"
          />
        </div>
      </div>

      {/* Social Icons - Responsive */}
      <div className="flex justify-center sm:justify-start max-w-4xl mx-auto mt-5">
        <div className="flex space-x-4">
          {/* Instagram */}
          

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/srujan-annam18/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow-md hover:shadow-lg group transition-all duration-300"
          >
            <svg className="rounded-md transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.6975 11C12.6561 11 11 12.6057 11 14.5838V57.4474C11 59.4257 12.6563 61.03 14.6975 61.03H57.3325C59.3747 61.03 61.03 59.4255 61.03 57.4468V14.5838C61.03 12.6057 59.3747 11 57.3325 11H14.6975ZM26.2032 30.345V52.8686H18.7167V30.345H26.2032ZM26.6967 23.3793C26.6967 25.5407 25.0717 27.2703 22.4615 27.2703L22.4609 27.2701H22.4124C19.8998 27.2701 18.2754 25.5405 18.2754 23.3791C18.2754 21.1686 19.9489 19.4873 22.5111 19.4873C25.0717 19.4873 26.6478 21.1686 26.6967 23.3793ZM37.833 52.8686H30.3471L30.3469 52.8694C30.3469 52.8694 30.4452 32.4588 30.3475 30.3458H37.8336V33.5339C38.8288 31.9995 40.6098 29.8169 44.5808 29.8169C49.5062 29.8169 53.1991 33.0363 53.1991 39.9543V52.8686H45.7133V40.8204C45.7133 37.7922 44.6293 35.7269 41.921 35.7269C39.8524 35.7269 38.6206 37.1198 38.0796 38.4653C37.8819 38.9455 37.833 39.6195 37.833 40.2918V52.8686Z" fill="#006699"/>
            </svg>
          </a>

          {/* Email */}
          <a 
            href="mailto:annamsrujanreddy2002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow-md hover:shadow-lg group transition-all duration-300"
          >
            <svg className="rounded-md transition-all duration-300 group-hover:scale-110" width="28" height="28" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0065 56.1236H21.4893V35.5227L9.37109 26.4341V52.4881C9.37109 54.4997 11.001 56.1236 13.0065 56.1236Z" fill="#4285F4"/>
              <path d="M50.5732 56.1236H59.056C61.0676 56.1236 62.6914 54.4937 62.6914 52.4881V26.4341L50.5732 35.5227" fill="#34A853"/>
              <path d="M50.5732 19.7693V35.5229L62.6914 26.4343V21.587C62.6914 17.0912 57.5594 14.5282 53.9663 17.2245" fill="#FBBC04"/>
              <path d="M21.4893 35.5227V19.769L36.0311 30.6754L50.5729 19.769V35.5227L36.0311 46.429" fill="#EA4335"/>
              <path d="M9.37109 21.587V26.4343L21.4893 35.5229V19.7693L18.0962 17.2245C14.4971 14.5282 9.37109 17.0912 9.37109 21.587Z" fill="#C5221F"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="px-14 sm:px-26 lg:px-38 my-16 sm:my-24 md:my-12 text-center sm:text-left">
        <p>Hi, I’m Srujan 👋
I’m a passionate MERN stack developer who loves building modern and user-friendly web applications. I enjoy working with MongoDB, Express.js, React, and Node.js to create full-stack projects that are fast, responsive, and easy to use.

I like solving problems with clean code, learning new technologies, and improving my skills every day. My goal is to build applications that make life simpler and more enjoyable for people.</p>
      </div>
    </div>
    
  )
}

export default Hero;