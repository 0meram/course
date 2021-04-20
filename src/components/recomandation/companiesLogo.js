
import React from 'react'
import Mifne from '../../images/mifne.jpg'
import OrNatan from '../../images/orNatan.jfif'
import ShellTech from '../../images/shellTech.jfif'

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
              <CompaniesLogo src={Mifne} alt={"image"}/>
              <CompaniesLogo src={OrNatan} alt={"image"}/>
              <CompaniesLogo src={ShellTech} alt={"image"}/>
            </CompaniesContainer>
        </ServicesContainer>
            
        </>
    )
}

export default Companies