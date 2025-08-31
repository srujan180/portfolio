
import { Card } from "flowbite-react";

function Component() {
  return (
    <>
    <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
    <Card href="https://divinegpt.onrender.com/" className="max-w-sm m-10">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Divine GPT
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
Divine GPT is an AI-powered conversational assistant designed to deliver spiritual guidance, devotional stories, and answers to user queries in a personalized and engaging way.

Built using LangChain as the orchestration framework and Google’s Gemini API as the core LLM, Divine GPT integrates advanced natural language processing with structured prompt engineering to provide context-aware, accurate, and meaningful responses.      </p>
    </Card>
    <Card href="https://mern-project-taupe-seven.vercel.app/" className="max-w-sm m-10">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        ThinkBook
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
ThinkBook is a feature-rich digital notebook and knowledge management platform designed to help users capture, organize, and access their ideas, thoughts, and important information in a seamless and intuitive manner. Built using the MERN stack (MongoDB, Express.js, React, Node.js), ThinkBook combines modern web technologies with responsive design principles to deliver a smooth and interactive user experience across devices.      </p>
    </Card>
    </div>
  </>
  );
}
export default Component
