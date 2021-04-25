import Tree from "../../images/tree.svg"
import Us from "../../images/us.png"
import Galgal from "../../images/galgal.png"
import Savings from "../../images/savings.svg"
import Pay from "../../images/pay.svg"
import Man from '../../images/purpleMan.png'


export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc:true,
    lightTitle:false,
    topLine: '',
    headline: 'קצת עלינו',
    description: "אילון אטיאס ואיתי ברלין, מייסדי עמותת גלגלי עזר. יזמים צעירים בתחום החברתי בישראל  המגיעים מתחום ההדרכה בצה''ל בתור כמפקדים קרביים",
    p: "אנו רואים חשיבות גדולה להשקיע את מירב מאמצינו בדור הצומח מתוך הבנה שהדור הצעיר יוביל את המדינה בעתיד הקרוב",
    buttonLabel: ' גלו עוד',
    to:'values',
    imgStart: false,
    img: Us,
    alt: 'Car' ,
    dark: true,
    primary: true,
    darkText: true
};


export const homeObjFour = {
    id: 'discover',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '',
    headline: 'קצת על העמותה',
    description:  "עמותת גלגלי עזר מקדמת ומשפיעה לקדם ולהשפיע על הנוער בחברה הישראלית במגוון תחומים ושלבים בחייו",
    p:"המטרה שלנו-  לסייע ולהכווין את דור העתיד בצמתים מרכזיים בחייו תוך מתן דגש על תוכן מקצועי וחוייתי בתוך תהליך קבוצתי איכותי וממוקד. העמותה פועלת בקרב שתי קבוצות, האחת חיילים משוחררים והשניה תלמידי כיתה יב",
    p2:"אנו מאמינים בתהליך הנבנה בצעדים קטנים, דברים קטנים-אנשים גדולים",
    to:'about',
    buttonLabel: '  ? מי אנחנו  ',
    imgStart: true,
    img: Galgal,
    alt: 'giggy' ,
    dark: false,
    primary: false,
    darkText: false
}
