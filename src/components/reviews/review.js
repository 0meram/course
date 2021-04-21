import React, { useState, useEffect } from 'react'
import data from './reviewData'
import "./review.css"
import {
  ReviewContainer,
  ReviewSection,
  ReviewTitle,
  ReviewH2,
  ReviewSectionCenter,
  ReviewImg,
  ReviewH4,
  PersonTitle,
  PersonText,
  ReviewButtonPrev, 
  ReviewButtonNext,
  IconRight,
  IconLeft,
  ReviewArticle
}
from './reviewElements'


function Review() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = React.useState(0)

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }, 4500)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <ReviewContainer id="reviews">
    <ReviewSection>
      <ReviewTitle>
        <ReviewH2>
          החברה שלנו מגיבים
        </ReviewH2>
      </ReviewTitle>
      <ReviewSectionCenter>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <ReviewArticle className={position} key={id}>
              <ReviewImg src={image} alt={name} className='person-img' />
              <ReviewH4>{name}</ReviewH4>
              <PersonTitle >{title}</PersonTitle>
              <PersonText >{quote}</PersonText>
            </ReviewArticle>
          )
        })}
        <ReviewButtonPrev
         onClick={prevSlide}>
          <IconLeft />
        </ReviewButtonPrev>
        <ReviewButtonNext
          onClick={nextSlide}>
          <IconRight />
        </ReviewButtonNext>
      </ReviewSectionCenter>
    </ReviewSection>
    </ReviewContainer>
  )
}

export default Review
