import React, {useState} from 'react'
import SideBar from "../components/sideBar/index"
import NavBar from "../components/nav/index"
import Hero from "../components/hero/index"
import Info from "../components/info/index"
import {homeObjOne, homeObjFour} from '../components/info/data'
import Services from '../components/services'
import Footer from '../components/footer'
import Constructing from '../components/constructing'
import SignIn from '../components/signIn'
import Review from '../components/reviews/review'
import OurValues from '../components/ourValues/values'
import Companies from "../components/recomandation/companiesLogo"
import Gallery from "../components/gallery/gallery"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

const toggleSideBar = () =>{
    setIsOpen(!isOpen)
}
    return (
        <>
            {/* <SideBar isOpen={isOpen} toggle={toggleSideBar}/>
            <NavBar toggle={toggleSideBar} />
            <Hero />
            <Info {...homeObjFour}/>
            <Info {...homeObjOne}/>
            <OurValues />
            <Services />
            <Review />
            <Companies/>
            <Gallery />
            <SignIn />
            <Footer /> */}
            <Constructing/>
        </>
    )
}

export default Home
