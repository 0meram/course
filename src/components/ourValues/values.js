import React from 'react'

import { GiSupersonicArrow } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";
import { SiGumroad } from "react-icons/si";
import { FaPeopleCarry } from "react-icons/fa";

import {
ServicesContainer,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP,

} from './valuesElements'

const OurValues = () => {
    return (
        <>
        <ServicesContainer id="values">
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon ><GiMountainRoad /></ServicesIcon>
                    <ServicesH2>תהליך</ServicesH2>
                    <ServicesP>התהליך הינו מרכיב משמעותי בתחושת המסוגלות ובמדד ההצלחה בתוך הסדנא ולאחריה</ServicesP>
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
                    <ServicesP>תוכן מקצועי הינו עמוד השדרה שלנו תוך מתן דגש על איכות ודיוק עבור קהל היעד</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        </>
    )
}

export default OurValues
