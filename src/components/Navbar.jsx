import React from 'react'
import LOGO from '../images/svg0.png'
import { Link } from 'react-router-dom'


const NavbarItems = [
    { path: '/services', label: 'Services' },
    { path: '/ourwork', label: 'Our Work' },
    { path: '/aboutus', label: 'About us' },
    { path: '/insights', label: 'Insights' },
    { path: '/contactus', label: 'Contact Us' }
]
const Navbar = () => {


    return (
        <>
            <div className="navbar w-full px-20 py-8 font-['Neue Montreal'] border-t-2 border-zinc-900">
                <div className="navbar_container justify-between flex items-center">
                    <div className="nav_logo">
                        <img src={LOGO} alt="logo_image" />
                    </div>
                    <div className='Link flex gap-10 text-black'>
                        {/* {["Services", "Our Work", "About us", "Insights", "Contact Us"] */}
                        {/* {`text-lg font-light capitalize ${index == 4 && "ml-32"}`} */}
                        {NavbarItems.map((items, index) => (
                            <Link key={index} className={`text-lg font-light capitalize ${index == 4 && "ml-32"}`} to={items.path}>
                                {items.label}
                            </Link>
                        ))}
                    </div>
                </div>

            </div >
        </>
    )
}

export default Navbar