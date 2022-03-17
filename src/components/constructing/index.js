import React from 'react'
import Logo from '../../images/logoTachlessT.png'
import {
    FooterContainer,
    FooterWrap,
    SocialMediaWrap,
    NavLogo,
} from './FooterElements'

const Constructing = () => {

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMediaWrap>
                        <NavLogo src={Logo} alt="logo" />
                        <div style={{ color: 'white', fontSize: '18px' }}>
                            האתר בשיפוצים                            </div>
                        <div style={{ color: 'white', fontSize: '10px' }}>
                            האתר נבנה על ידי <a href="https://omers-folio.netlify.app/" style={{ color: 'white', fontSize: '10px' }}>עומר רם</a>
                        </div>
                    </SocialMediaWrap>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Constructing
