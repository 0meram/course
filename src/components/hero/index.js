import React, {useState} from 'react'
import Video from '../../videos/vbg.mp4'
import {Button} from '../ButtonElements'
import {HeroContainer, HeroBg, VideoBg ,HeroContent, HeroTag, HeroP, HeroBtnWrapper, HeroButton, ArrowForward, ArrowRight } from "./heroElements"

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
                    {/* <BgImage src={Video} alt="grey"/> */}
                </HeroBg>
                <HeroContent>
                    <HeroP>דור העתיד זה אתם <span className="bold">ואנחנו כאן בשבילכם</span></HeroP>
                    <HeroTag>דברים קטנים - אנשים גדולים</HeroTag>
                    <HeroBtnWrapper>
                        <Button
                            to='discover' 
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

