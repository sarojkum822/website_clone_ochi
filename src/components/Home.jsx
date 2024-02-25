import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import Merquee from './Merquee'
import Readme from './Readme'

const Home = () => {
    return (
        <>
            <Navbar />
            <LandingPage />
            <Merquee />
            <Readme/>
        </>
    )
}

export default Home
