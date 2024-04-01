
import React from 'react';
import Animation from './Animation';
import Typewriter from "typewriter-effect";
import Chatbot from './chatbot';
import Images from './Images';
import AnimatedCursor from "react-animated-cursor";
import Footer from './Footer';
import Card from './card';
import design2 from './think3.png';
import Navbar from '../Navbar/Navbar';

export function Home() {

  return (<>
    <Navbar></Navbar>
    <div>
      <div className="App">
        <AnimatedCursor
          innerSize={10}
          outerSize={10}
          color='153, 50, 204'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Animation></Animation>
      <Card></Card>
      <div className="md:flex bg-[url('./bg.jpeg')] bg-center">
        <div className='text-7xl w-2/3'>
          <p className='py-40 pr-20 pl-20 text-white hover:shadow-amber-400 hover:scale-95 rounded-3xl hover:duration-200 hover:shadow-xl '><Typewriter
            options={{
              strings: ["<strong>Techub</strong> serve as versatile platform that can be utilized for various applications."],
              autoStart: true,
              loop: true,
              pauseFor: (1000000000000000),
            }}
          /></p>
        </div>
        <div className='w-1/2'>
          <img className='h-screen w-screen' src={design2} alt="rocket ready for launch"></img>
        </div>
      </div>
    </div >
    <Images></Images>
    <div className=" bg-[url('./bg.jpeg')] bg-right pb-11 rounded-b-full">
      <div className='text-8xl text-center '>
        <p className=' py-36 pr-20 pl-20  text-white'>Explore Premium Features!!</p>
      </div>
      <div className='text-center justify-center'>
        <div className="relative inline-flex group">
          <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
          </div>
          <a href="#" title="Get quote now"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button">Explore now
          </a>
        </div>
      </div>
    </div>
    <div>
      <Chatbot />
    </div>
    <Footer></Footer>


  </>
  );
}
export default Home
