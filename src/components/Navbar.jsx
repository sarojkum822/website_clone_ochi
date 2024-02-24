import React from 'react'
import LOGO from '../images/svg0.png'


const Navbar = () => {

    return (
        <>
            <div className="navbar w-full px-20 py-8 font-['Neue Montreal']">
                <div className="navbar_container justify-between flex items-center">
                    <div className="nav_logo">
                        <img src={LOGO} alt="logo_image" />
                    </div>
                    <div className='Link flex gap-10'>
                        {["Services", "Our Work", "About us", "Insights", "Contact Us"].map((items, index) => (
                            <a key={index} className={`text-md font-light capitalize ${index == 4 && "ml-32"}`}>{items}</a>
                        ))}
                    </div>
                </div>

            </div >
        </>
    )
}

export default Navbar