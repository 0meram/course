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
                    <ServicesH2>תוכן</ServicesH2>
                    <ServicesP>סדנאות, מפגשים ותוכן שנוצר ללא הפסקה, הכל כדי להעביר את הידע הכי מתקדם ומועיל לרשות הלוחמים המשוחררים שלנו</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>תוכן</ServicesH2>
                    <ServicesP>סדנאות, מפגשים ותוכן שנוצר ללא הפסקה, הכל כדי להעביר את הידע הכי מתקדם ומועיל לרשות הלוחמים המשוחררים שלנו</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>תוכן</ServicesH2>
                    <ServicesP>סדנאות, מפגשים ותוכן שנוצר ללא הפסקה, הכל כדי להעביר את הידע הכי מתקדם ומועיל לרשות הלוחמים המשוחררים שלנו</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>תוכן</ServicesH2>
                    <ServicesP>סדנאות, מפגשים ותוכן שנוצר ללא הפסקה, הכל כדי להעביר את הידע הכי מתקדם ומועיל לרשות הלוחמים המשוחררים שלנו</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default OurValues
