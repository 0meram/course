import Tree from "../../images/tree.svg"
import Finish from "../../images/finish.svg"
import Savings from "../../images/savings.svg"
import Pay from "../../images/pay.svg"
import Wallet from "../../images/wallet.svg"
import Man from '../../images/purpleMan.png'


export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc:true,
    lightTitle:false,
    topLine: 'קצת עלינו',
    headline: 'אז מי אנחנו בעצם',
    description: "אילון אטיאס ואיתי ברלין, מייסדי עמותת גלגלי עזר. יזמים צעירים בתחום החברתי בישראל  המגיעים מתחום ההדרכה בצה'ל בתור מפקדים קרביים. אנו רואים את חשיבות גדולה להשקיע את מירב מאמצינו בדור הצומח מתוך ההבנה שהדור הצעיר יוביל את המדינה בעתיד הקרוב.",
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
    topLine: 'על העמותה',
    headline: 'מה עושים אצלנו בעמותה',
    description: " המטרה שלנו-  לסייע ולהכווין את דור העתיד בצמתים מרכזיים בחייו תוך מתן דגש על תוכן מקצועי וחוייתי בתוך תהליך קבוצתי איכותי וממוקד. עמותת גלגלי עזר חרטה על דגלה לקדם ולהשפיע על הנוער בחברה הישראלית במגוון תחומים ושלבים בחייו.",
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
    topLine: ' העמותה שלנו',
    headline: 'גלגלי עזר',
    description:  " המטרה שלנו-  לסייע ולהכווין את דור העתיד בצמתים מרכזיים בחייו תוך מתן דגש על תוכן מקצועי וחוייתי בתוך תהליך קבוצתי איכותי וממוקד. עמותת גלגלי עזר חרטה על דגלה לקדם ולהשפיע על הנוער בחברה הישראלית במגוון תחומים ושלבים בחייו.",
    to:'services',
    buttonLabel: 'לסדנאות שלנו',
    imgStart: true,
    img: Man,
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