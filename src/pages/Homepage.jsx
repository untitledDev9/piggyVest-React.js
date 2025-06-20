import React from 'react'
import NavBar from "../components/navbar/NavBar"
import Hero from "../components/hero/Hero"
import Invest from '../components/invest/Invest'
import Month from "../components/month/Month"
import Join from '../components/join/Join'

const Homepage = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Invest />
            <Month />
            <Join />
        </div>
    )
}

export default Homepage