import React from 'react'
import Icon1 from '../../images/Chatbot.svg'
import Icon2 from '../../images/digitalCurrency.svg'
import Icon3 from '../../images/digitalCurrency.svg'
import Icon4 from '../../images/digitalCurrency.svg'
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
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>מקצועיות</ServicesH2>
                    <ServicesP>אנו משקיעים את מירב מאמצינו לתת תוכן מקצועי, איכותי ומדויק לקהילה שלנו</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>חוויה</ServicesH2>
                    <ServicesP>החוויה היא החצי המשלים של המקצועית. כל התכנים עוברים בצורה חווייתית וייחודית בתוך הקבוצה</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>יחס אישי</ServicesH2>
                    <ServicesP>אנו מקפידים על יחס אישי וחניכה צמודה עבור כל משתתף ומשתתפת תוך ליווי והתאמה אישית לאורך כל הדרך</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>תהליך</ServicesH2>
                    <ServicesP>אנחנו מאמינים בתהליך איכותי וממושך ולא חוויה חד פעמית קצרה. התהליך הינו מרכיב קריטי בתחושת המסוגלות ובמדד ההצלחה בתוך הסדנא ולאחריה</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default OurValues
