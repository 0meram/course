import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import Logo from '../../images/logoMain.png'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {SiWhatsapp} from "react-icons/si"
import {
FooterContainer,
FooterWrap,
SocialMedia,
SocialMediaWrap,
WebSiteRights,
SocialIcons,
SocialIconLink,
NavLogo,
LogoScroll
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                <SocialMediaWrap>
                    <LogoScroll>
                    <NavLogo to="/" onClick={toggleHome} src={Logo} alt="logo" /></LogoScroll>
                    <SocialIcons>
                        <SocialIconLink href="https://www.instagram.com/galgalyezer/" target="_blank" aria-label="Instegram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="https://www.facebook.com/%D7%93%D7%91%D7%A8%D7%99%D7%9D-%D7%A7%D7%98%D7%A0%D7%99%D7%9D-%D7%90%D7%A0%D7%A9%D7%99%D7%9D-%D7%92%D7%93%D7%95%D7%9C%D7%99%D7%9D-100780298417242" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="https://wa.me/972509705088" target="_blank" aria-label="Whatsapp"><SiWhatsapp/></SocialIconLink>
                    </SocialIcons>
                    <WebSiteRights>
                    .גלגלי עזר @ {new Date().getFullYear()} כל הזכויות שמורות
                    </WebSiteRights>
                    <div style={{color: 'white' , fontSize: '11px'}}>
                    האתר נבנה על ידי עומר רם
                    </div>
                </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        </>
    )
}

export default Footer
