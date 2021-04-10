import styled from 'styled-components'
import {Link} from 'react-scroll'


export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#ff791a' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '20px' : '14px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;


&:hover {
    transition: all 0.3s ease-in-out;
    background: ${({primary}) => (primary ? '#ffffff' : '#ff791a')};
    transform: scale(1.07);
}

`