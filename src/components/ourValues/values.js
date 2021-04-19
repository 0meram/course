import React from 'react'
import Icon1 from '../../images/Chatbot.svg'
import Icon2 from '../../images/digitalCurrency.svg'
import Icon3 from '../../images/digitalCurrency.svg'
import Icon4 from '../../images/digitalCurrency.svg'
import { GiSupersonicArrow } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";
import { SiGumroad } from "react-icons/si";
import { FaPeopleCarry } from "react-icons/fa";

import {
    
ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP,

} from './valuesElements'

const OurValues = () => {
    return (
        <>
        <ServicesContainer id='services'>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon ><GiMountainRoad /></ServicesIcon>
                    <ServicesH2>תהליך</ServicesH2>
                    <ServicesP>אנחנו מאמינים בתהליך איכותי וממושך ולא חוויה חד פעמית קצרה. התהליך הינו מרכיב קריטי בתחושת המסוגלות ובמדד ההצלחה בתוך הסדנא ולאחריה</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><FaPeopleCarry /></ServicesIcon>
                    <ServicesH2>יחס אישי</ServicesH2>
                    <ServicesP>אנו מקפידים על יחס אישי וחניכה צמודה עבור כל משתתף ומשתתפת תוך ליווי והתאמה אישית לאורך כל הדרך</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><SiGumroad/></ServicesIcon>
                    <ServicesH2>חוויה</ServicesH2>
                    <ServicesP>החוויה היא החצי המשלים של המקצועית. כל התכנים עוברים בצורה חווייתית וייחודית בתוך הקבוצה</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><GiSupersonicArrow /></ServicesIcon>
                    <ServicesH2>מקצועיות</ServicesH2>
                    <ServicesP>אנו משקיעים את מירב מאמצינו לתת תוכן מקצועי, איכותי ומדויק לקהילה שלנו</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default OurValues
