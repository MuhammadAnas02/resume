import React from 'react'
import Image from 'next/image'
import hero from '@/Hero.png'


function Hero() {
  return (
    <div id='' className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,_#000,_#281942_35%,_#8F5C55_60%,_#DBAF6E_80%)]">
      {/* Background Gradient Circle */}
      <div
        className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-black top-[500px] left-[50%] -translate-x-1/2
          bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"
      ></div>
      
      <div className="relative">
        {/* Main Text */}
        <div className="mt-4 text-center">
          <h1 className="text-[#98B4CE] text-4xl sm:text-6xl md:text-8xl text-center font-bold">Hi, I am</h1>
          <h1 className="text-[#E48A57] text-4xl sm:text-6xl md:text-8xl text-center font-bold">Muhammad Anas</h1>
          
          {/* Description */}
          <p className="text-center text-xl max-w-[500px] mx-auto mt-8 px-4">
            I am a full stack web developer
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="mt-8 flex justify-center">
          <Image
            src={hero}
            alt="Hero Image"
            width={800}
            height={200}
            className="w-full sm:w-[600px] md:w-[800px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero
