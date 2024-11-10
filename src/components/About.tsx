import React from 'react'
import { FaBook } from "react-icons/fa"
import { CiDesktop } from "react-icons/ci";
import { FaAccusoft } from "react-icons/fa6";
const About = () => {
    return (
        <div className="max-w-[1200px] xl:ml-72 mx-auto" id="About">
         
          <div className="flex flex-wrap mx-6 gap-6 place-items-center">
        
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden w-full sm:w-1/2 lg:w-1/3">
              <div className="flex flex-row p-6 pt-20">
                <FaBook className="w-[30px] h-[40px]" />
                <div className="flex flex-col mt-2 pl-3">
                  <h2 className="text-2xl font-bold text-white/25">Education</h2>
                  <p className="text-lg text-white/70 mt-2">Software Engineering</p>
                </div>
              </div>
            </div>
    
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden w-full sm:w-1/2 lg:w-1/3">
              <div className="flex flex-row p-6 ">
                <CiDesktop className="w-[120px] h-[100px]" />
                <div className="flex flex-col mt-2 pl-3">
                  <h2 className="text-2xl font-bold text-white/25">Skills</h2>
                  <p className="text-lg text-white/70 mt-2">
                    I have been focusing on frontend development with React, Next.js, Tailwind CSS, and Framer Motion.
                  </p>
                </div>
              </div>
            </div>
          </div>
    
        
          <div className="flex flex-wrap mx-6 gap-6 place-items-center mt-5">
           
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden w-full sm:w-1/2 lg:w-1/3">
              <div className="flex flex-row p-6">
                <FaAccusoft className="w-[120px] h-[100px]" />
                <div className="flex flex-col mt-2 pl-3">
                  <h2 className="text-2xl font-bold text-white/25">Soft Skills</h2>
                  <p className="text-lg text-white/70 mt-2">
                    I've learned various soft skills such as cold emailing, documentation, and team management.
                  </p>
                </div>
              </div>
            </div>
    
        
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden w-full sm:w-1/2 lg:w-1/3">
              <div className="flex flex-row p-6 py-10">
                <CiDesktop className="w-[30px] h-[40px]" />
                <div className="flex flex-col mt-2 pl-3">
                  <h2 className="text-2xl font-bold text-white/25">Experience</h2>
                  <p className="text-lg text-white/70 mt-2">
                    I have recently worked with Next.js and TypeScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default About
