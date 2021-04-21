import React, {useState} from 'react'
import Video from '../../videos/video4.mp4'
import {Button} from '../ButtonElements'
import Logo from "../../images/logoMain.png"
import Grey from '../../images/gray.jpg'
import Wheels from '../../images/Wheels.png'
import {HeroContainer, HeroBg, VideoBg ,HeroContent, HeroH1, HeroImg, BgImage, HeroP, HeroBtnWrapper, HeroButton, ArrowForward, ArrowRight } from "./heroElements"

const Hero = () => {
const[hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

    return (
        <>
            <HeroContainer id='home'>
                <HeroBg>
                    {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
                    <BgImage src={Grey} alt="grey"/>
                </HeroBg>
                <HeroContent>
                       <HeroImg src={Wheels} alt="hero"></HeroImg>
                    <HeroH1>גלגלי עזר</HeroH1>
                    {/* <HeroImg src={Logo} alt="hero"></HeroImg> */}
                    <HeroP>
                     דור העתיד זה אתם ואנו כאן בשבילכם </HeroP>
                    <HeroBtnWrapper>
                        <Button
                         to='about' 
                         onMouseEnter={onHover} 
                         onMouseLeave={onHover}
                         primary='true'
                         dark='true'
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact='true'
                         offset={-80}
                         >
                            {hover ? <ArrowRight /> : < ArrowForward /> }בואו נתחיל 
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero

