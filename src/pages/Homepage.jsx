import React from 'react'
import NavBar from "../components/navbar/NavBar"
import Hero from "../components/hero/Hero"
import Invest from '../components/invest/Invest'
import Month from "../components/month/Month"
import Join from '../components/join/Join'
import Company from '../components/company/Company'
import Footer from '../components/footer/Footer'
import Savings from '../components/savings/Savings'

const Homepage = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Savings />
            <Invest />
            <Month />
            <Join />
            <Company />
            <Footer />
        </div>
    )
}

export default Homepage