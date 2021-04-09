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
            {/* <Info {...homeObjFive}/>
            <Info {...homeObjTwo}/> */}
            <Services />
            {/* <Info {...homeObjThree}/> */}
            {/* <Pricing /> */}
            <Review />
            <SignIn />
            <Footer />
        </>
    )
}

export default Home
