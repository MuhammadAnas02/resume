import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { PiFigmaLogoFill } from "react-icons/pi";


export default function Skills() {
  return (
    <>
      <section id="Skills" className="text-gray-600 body-font bg-[#0f0916]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-2xl font-bold title-font text-white">
              Skills
            </h1>
            <div className="w-full h-1 bg-blue-200 mt-3"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
            <div className="flex rounded-lg h-full bg-[#2B1942] p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="text-4xl text-orange-500">
                  <FaHtml5 />
                </div>
                <h2 className="text-white text-lg title-font font-medium">HTML</h2>
              </div>
              <div className="flex-grow">
                <div className="w-full h-2 bg-gray-400">
                  <div className="w-full h-2 bg-blue-500" />
                </div>
                <div>
                  <h2 className="text-white text-right">100%</h2>
                </div>
              </div>
            </div>
            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="text-4xl text-blue-600">
                  <IoLogoCss3 />
                </div>
                <h2 className="text-white text-lg title-font font-medium">CSS</h2>
              </div>
              <div className="flex-grow">
                <div className="w-full h-2 bg-gray-900">
                  <div className="w-[98%] h-2 bg-blue-500" />
                </div>
                <div>
                  <h2 className="text-white text-right">98%</h2>
                </div>
              </div>
            </div>

            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="text-4xl text-yellow-400">
                  <IoLogoJavascript />
                </div>
                <h2 className="text-white text-lg title-font font-medium">JavaScript</h2>
              </div>
              <div className="flex-grow">
                <div className="w-full h-2 bg-gray-900">
                  <div className="w-[90%] h-2 bg-blue-500" />
                </div>
                <div>
                  <h2 className="text-white text-right">90%</h2>
                </div>
              </div>
            </div>
            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="text-4xl text-blue-800">
                  <SiTypescript />
                </div>
                <h2 className="text-white text-lg title-font font-medium">TypeScript</h2>
              </div>
              <div className="flex-grow">
                <div className="w-full h-2 bg-gray-900">
                  <div className="w-[93%] h-2 bg-blue-500" />
                </div>
                <div>
                  <h2 className="text-white text-right">93%</h2>
                </div>
              </div>
            </div>
            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="text-4xl text-white">
                  <RiNextjsLine />
                </div>
                <h2 className="text-white text-lg title-font font-medium">Next.js</h2>
              </div>
              <div className="flex-grow">
                <div className="w-full h-2 bg-gray-900">
                  <div className="w-[99%] h-2 bg-blue-500" />
                </div>
                <div>
                  <h2 className="text-white text-right">99%</h2>
                </div>
              </div>
            </div>
            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="text-4xl text-red-600">
                  <PiFigmaLogoFill />
                </div>
                <h2 className="text-white text-lg title-font font-medium">Figma</h2>
              </div>
              <div className="flex-grow">
                <div className="w-full h-2 bg-gray-900">
                  <div className="w-[85%] h-2 bg-blue-500" />
                </div>
                <div>
                  <h2 className="text-white text-right">85%</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}