
import React from 'react'
import Icon from "../../images/pay.svg"
import {
ServicesContainer,
CompaniesContainer,
CompaniesLogo
} from './companiesLogoElements'



const Companies = () => {
    return (
        <>
        <ServicesContainer id='logo' key="key">
            <CompaniesContainer >
              <CompaniesLogo src={Icon} alt={"image"}/>
              <CompaniesLogo src={Icon} alt={"image"}/>
              <CompaniesLogo src={Icon} alt={"image"}/>
              <CompaniesLogo src={Icon} alt={"image"}/>
            </CompaniesContainer>
        </ServicesContainer>
            
        </>
    )
}

export default Companies