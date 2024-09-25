import React from 'react'
import Header from '../Components/Header/Header'
import Services from '../Components/Services/Services'
import Visit from '../Components/Visit/Visit'
import Model from '../Components/Models/Model'
import BusStopMap from '../Components/Map/BusStopMap'
import WhyBus from '../Components/Why/WhyBus'
import Not from '../Components/NotFound/NotFound'
import Footer from '../Components/Footer/Footer'
import Seats from '../Components/SeatReserved/SeatReserved'
import BusCompanyRegistration from '../Components/BusCompanyRegister/BusCompanyRegister'
const Home = () => {
    return (
        <>

            <Header />
            <Services />
            <Visit />
            <Model />
            <BusStopMap />
            <WhyBus />
            <Not/>
            <Footer/>
            <Seats/>
            <BusCompanyRegistration/>
        </>
    )
}

export default Home