import { data } from 'autoprefixer';
import React from 'react'


export default function About() {
    const list = ["Html", "Css", "Javascript", "React", "SQL", "Python"];
    return (
        <div>
            <div className="h-screen">
                <div className=" flex flex-wrap w-full justify-center space-x-10">
                    <div className="lg: w-1/3 md: w-1/3 h-[400px] bg-pink-200 mt-[130px]"></div>
                    <div className="lg: w-1/3 md:1/2 h-[400px] mt-[130px]">
                        <p className='font-[Open Sans] w-full text-lg font-[500] text-justify  text-[#2D3748]'>
                            Hello, I'm a Thuvarakan, strong in design and integration
                            with intuitive  problem-solving skills. I am passionate about
                            implementing and  launching new projects.<br></br><br></br>I
                            have the ability to translate business requirements into technical solutions, and I have rich experience
                            in web &
                            mobile application design, building, and customization.
                            I am also skilled at</p>
                        <div className=' flex-grow space-x-5 mt-6 w-1/1'>
                            {list.map((data) => (
                                <button className=' font-[Open Sans] text-lg font-[500] text-justify 
             hover:animate-none hover:scale-125  cursor-text text-[#C2185B] 
             p-2 rounded-md bg-pink-100 mt-2  '>
                                    {data}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex space-x-10 justify-center mt-40 '>
                    <div className='w-1/4 h-[220px] bg-[rgba(217,217,217,0.03)] shadow-[0px_0px_3px_3px_rgba(0,0,0,0.05)]  rounded-2xl'></div>
                    <div className='w-1/4 h-[220px] bg-[rgba(217,217,217,0.03)] shadow-[0px_0px_3px_3px_rgba(0,0,0,0.05)]  rounded-2xl'></div>
                    <div className='w-1/4 h-[220px] bg-[rgba(217,217,217,0.03)] shadow-[0px_0px_3px_3px_rgba(0,0,0,0.05)]  rounded-2xl'></div>
                   
                    
                </div>
                <div className='flex space-x-5 justify-center mt-20'>
                    <div className='w-1/4 h-[200px] bg-pink-200 '></div>
                    
                </div>
            </div>
        </div>
    )
}
