import Tree from "../../images/tree.svg"
import Finish from "../../images/finish.svg"
import Savings from "../../images/savings.svg"
import Pay from "../../images/pay.svg"
import Wallet from "../../images/wallet.svg"


export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc:true,
    topLine: 'קצת עלינו',
    headline: 'אז מי אנחנו בעצם ומה אנחנו עושים',
    description: "Get acces to our exclusive app that allows you to send unlimited transactions without getting charged any fees",
    buttonLabel: 'גלו עוד',
    to:'discover',
    imgStart: false,
    img: Tree,
    alt: 'Car' ,
    dark: true,
    primary: true,
    darkText: true
}


export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: "We have you coverd no matter where you are located. All you need is an internet connection and a phone or computer",
    buttonLabel: 'Learn More',
    to:'services',
    imgStart: true,
    img: Savings,
    alt: 'giggy' ,
    dark: false,
    primary: false,
    darkText: true
}


export const homeObjThree = {
    id: 'sign',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremeley easy',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Sign up',
    imgStart: false,
    img: Pay,
    alt: 'Car' ,
    dark: true,
    primary: true,
    darkText: false
}


export const homeObjFour = {
    id: 'discover',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Simplify your life.',
    headline: 'לומדים יותר מבינים יותר',
    description: "Start with Dollacard Quartz and earn progressively more cash back as you level up to DollaCard Carbon. You can level up and maintain your status by meeting a minimum annual spend requirement or by referring others to become Dolla customers.",
    buttonLabel: 'Learn More',
    to:'services',
    imgStart: true,
    img: Finish,
    alt: 'giggy' ,
    dark: false,
    primary: false,
    darkText: false
}


export const homeObjFive = {
    id: 'sign',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Upgrade your money.',
    headline: 'More money in your pocket',
    description: "DollaCard provides unlimited cash back with no category restrictions at a higher rate than many other credit cards in the U.S. market. Furthermore, there are no annual, maintenance, or foreign transaction fees. The Dolla app also allows you to track your DollaCard spending alongside deposits in a Dolla Checking account.",
    buttonLabel: 'Sign up',
    imgStart: false,
    img: Wallet,
    alt: 'Car' ,
    dark: true,
    primary: true,
    darkText: false
}