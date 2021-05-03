
import React from 'react'
import {
ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP,
PersonTitle,
} from './recomandationElements'

const people = [

  {
    id: 2,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'john doe',
    title: 'regular guy',
    quote:'"Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch  ".',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'peter smith',
    title: 'product designer',
    quote:'"Drinking vinegar polaroid street art echo park, actually semiotics next" .',
  },
];





const Recomandation = () => {
    return (
        <>
        <ServicesContainer id='services' key={people.id}>
            <ServicesH1>השותפים שלנו</ServicesH1>
            <ServicesWrapper>
              {people.map((person) => {
                const {id, image, name, title, quote} = person;
                return(
                  <ServicesCard key={id}>
                  <ServicesIcon src={image} alt={name} />
                  <ServicesH2>{name}</ServicesH2>
                  <PersonTitle >{title}</PersonTitle>
                  <ServicesP>{quote}</ServicesP>
              </ServicesCard>
                )
              })}
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Recomandation
