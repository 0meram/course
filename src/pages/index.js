import React, {useState} from 'react'
import SideBar from "../components/sideBar/index"
import NavBar from "../components/nav/index"
import Hero from "../components/hero/index"
import Info from "../components/info/index"
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive} from '../components/info/data'
import Services from '../components/services'
import Footer from '../components/footer'
import SignIn from '../components/signIn'
import Pricing from '../components/pricing/pricing'
import Review from '../components/reviews/review'
import Recomandation from '../components/recomandation/recomandation'
import OurValues from '../components/ourValues/values'
import Companies from "../components/recomandation/companiesLogo"
import Course from "../components/courses/course"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

const toggleSideBar = () =>{
    setIsOpen(!isOpen)
}
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggleSideBar}/>
            <NavBar toggle={toggleSideBar} />
            <Hero />
            <Info {...homeObjOne}/>
            <Info {...homeObjFour}/>
            {/* <Course /> */}
            <Services />
            <OurValues />
            <Review />
            <Recomandation />
            <Companies/>
            <SignIn />
            <Footer />
        </>
    )
}

export default Home
