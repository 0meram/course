import React from 'react'
import Icon1 from '../../images/Chatbot.svg'
import Icon2 from '../../images/digitalCurrency.svg'
import {Button} from "../ButtonElements"
import {
    
ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP,

} from './servicesElements'

const Services = () => {
    return (
        <>
        <ServicesContainer id='services'>
            <ServicesH1>הסדנאות שלנו</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Chat Bot</ServicesH2>
                    <ServicesP>We help reduce your fees and increas your overall revenue.</ServicesP>
                    <Button
                         to='signup' 
                        //  primary='true'
                        //  dark='true'
                        //  smooth={true}
                        //  duration={500}
                        //  spy={true}
                        //  exact='true'
                        //  offset={-80}
                         >
                            להרשמה
                        </Button>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                    <Button
                         to='signup' 
                        //  primary='false'
                        //  dark='false'
                        //  smooth={true}
                        //  duration={100}
                        //  spy={true}
                        //  exact='false'
                        //  offset={-80}
                         >
                            להרשמה
                        </Button>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services
