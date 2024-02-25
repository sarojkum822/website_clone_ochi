import React from 'react'
import { motion } from "framer-motion"
import Home_img from '../images/img1.jpg'

const Merquee = () => {
    return (
        <>
            <div className='w-full h-[50vh] py-8 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-hidden'>
                <div className='gap-10 text flex border-t-2 border-b-2 border-zinc-300 justify-center whitespace-nowrap -mt-2'>
                    <motion.h1
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
                        className='font-["Founders_Grotesk_X_Condensed"] text-[11vw] leading-tight -mt-10 -mb-10 p-5 font-semibold uppercase'
                    >
                        WE ARE OCHI
                    </motion.h1>
                    <motion.h1
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
                        className='font-["Founders_Grotesk_X_Condensed"] text-[11vw] leading-tight -mt-10 -mb-10 p-5 font-semibold uppercase'
                    >
                        WE ARE OCHI
                    </motion.h1>

                </div>

                <div className='bg-[#CDEA68] w-full h-screen absolute mt-5 rounded-tl-3xl rounded-tr-3xl'>
                    <div className='text ml-[4vw] mt-[6vw]'>
                        <h1 className='text-[rgb(33,33,33)] font-["NeueMontreal, Roboto, sans-serif"] font-semibold text-[55px] leading-tight '>Ochi is a strategic partner for fast-grow­ing tech </h1>
                        <h1 className='text-[rgb(33,33,33)] font-["NeueMontreal, Roboto, sans-serif"] font-semibold text-[55px] leading-tight '>businesses that need to raise funds, sell prod­ucts,</h1>
                        <h1 className='text-[rgb(33,33,33)] font-["NeueMontreal, Roboto, sans-serif"] font-semibold text-[55px] leading-tight '>ex­plain com­plex ideas, and hire great peo­ple.</h1>
                    </div>
                    <div className='border-t-[1px] border-b-[1px] pb-[8vw] border-zinc-900 mt-10  w-full '>
                        <div className='text flex text-black font-["NeueMontreal, Roboto, sans-serif"] mt-[1vw] ml-[4vw]'>
                            <h1>What you can expect:</h1>
                            <div className='text ml-[40vw] flex'>
                                <div>
                                    <h1 className='w-[300px]'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h1>
                                    <h1 className='w-[300px] mt-7'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>

                                </div>

                                <div className='text ml-[10vw] mt-[6vw]'>
                                    <h1>S:</h1>
                                    <h1>Instagram</h1>
                                    <h1>Behance</h1>
                                    <h1>Facebook</h1>
                                    <h1>Linkdin</h1>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='flex justify-between bg-[#CDEA68] w-full h-screen overflow-hidden'>
                        <div className='ml-[3vw] font-semibold  text-black'>

                            <h1 className='pt-4 text-[3vw]'>Our approach:</h1>
                            <div className='readme mt-3 flex justify-center text-center bg-zinc-950 text-white w-fit text-[2vw] font-["NeueMontreal, Roboto, sans-serif"] border-zinc-900 rounded-l-[20vw] rounded-r-[20vw] font-normal'>
                                {["README", "."].map((item, index) => {
                                    return <p key={index} className={`font-normal font-["NeueMontreal, Roboto, sans-serif"] p-2 ml-6 ${index == 1 && "-mt-2 font-extrabold ml-[4vw] mr-2"}`}>{item}</p>
                                })}
                            </div>
                        </div>
                        <div className='image mt-4 mr-10'>
                            <div className='card '>
                                <img className=' rounded-xl shadow-2xl shadow-black-500' src={Home_img} alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Merquee
