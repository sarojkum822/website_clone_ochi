import React from 'react'
import Design from '../images/svg0.png'
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
    return (
        <>
            <div className='w-full h-screen bg-zinc-800 pt-2 border-t-2'>
                <div className='textstructure mt-40 px-10'>
                    {["WE CREATE", "EYE-OPENING", "PRESENTATION"].map((items, index) => {
                        return <h1 key={index} className={`uppercase text-8xl m-4 leading-[4vw] font-medium font-["Founders_Grostesk,Roboto, sans-serif"] ${index == 1 && "border-l-8"}`}>{items}</h1>
                    })}
                </div>
                <div className='border-t-2 mt-40 bg-zinc-900 flex px-10 py-5 justify-between'>

                    {["For public and private companies", "From the first pitch to IPO"].map((items, index) => (
                        <p key={index} className=' text-md font-["Neue_Montreal, Roboto, sans-serif"]'>{items}</p>
                    ))}
                    <div className='flex justify-center'>
                        <p className='px-2 py-1 border-zinc-200 font-medium border-2 rounded-full p-1 capitalize'>START THE PROJECT </p>
                        <p className=' border-2 rounded-full p-2 ml-2'><GoArrowUpRight /></p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default LandingPage