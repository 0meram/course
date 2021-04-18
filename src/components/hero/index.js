import React, {useState} from 'react'
import Video from '../../videos/video4.mp4'
import {Button} from '../ButtonElements'
import Logo from "../../images/logoMain.png"
import {HeroContainer, HeroBg, VideoBg ,HeroContent, HeroH1, HeroImg, HeroP, HeroBtnWrapper, HeroButton, ArrowForward, ArrowRight } from "./heroElements"

const Hero = () => {
const[hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

    return (
        <>
            <HeroContainer id='home'>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                </HeroBg>
                <HeroContent>
                    {/* <HeroH1>גלגלי עזר</HeroH1> */}
                    <HeroImg src={Logo} alt="hero"></HeroImg>
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
                            בואו נתחיל {hover ? <ArrowRight /> : < ArrowForward /> }
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero

