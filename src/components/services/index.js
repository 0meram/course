import React, {useState} from 'react'
import Icon1 from '../../images/leason.jpeg'
import Icon2 from '../../images/fun.jpeg'
import {Button} from "../ButtonElements"
import "./services.css"
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
ServicesContainer,
ServicesH1,
ServicesWrapper,
// ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP,

} from './servicesElements'



const Services = () => {
    const [showMore, setShowMore] = useState(true)
    const [showMore1, setShowMore1] = useState(true)

    const handleExpandClick = () => {
      setShowMore(!showMore);
    };

    const handleExpandClick1 = () => {
      setShowMore1(!showMore1);
    };

    let expand1 = 'show-more'
    if (showMore === false) {
      expand1 = 'show-less'
    }

    let expand2 = 'show-more1'
    if (showMore1 === false) {
      expand2 = 'show-less1'
    }

    return (
        <>
        <ServicesContainer id='services'>
            <ServicesH1>הסדנאות שלנו</ServicesH1>
            <ServicesWrapper>
                <div className={expand1} onClick={handleExpandClick}>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>עפים על החיים</ServicesH2>
                    <ServicesP>סדנת 'עפים על החיים' - סדנא המיועדת עבור משוחררות ומשוחררים משירות צבאי ולאומי. מטרת הסדנא הינה לסייע במעבר מהשירות לאומי/צבאי אל האזרחות.
הסדנא מקיפה ושוזרת מספר תחומים ונושאים אשר הינם קריטיים לשלב בו הם נמצאים בצורה מקצועית, חוייתית ומדויקת.
הסדנא מקיפה שלושה תחומים מרכזיים: פיתוח אישי, התנהלות כלכלית, הכוונה תעסוקתית ולימודית.
בנוסף, המשתתפים מקבלים מפגש 1:1 עם גורמי ההדרכה כדי לדייק ולמצות את התוכן והידע שהועבר אל מול הצרכים הפרטיים והספציפיים שלהם.</ServicesP>
                    <Button
                         to='signup' 
                        //  primary='true'
                        //  dark='true'
                        //  smooth={true}
                        //  duration={500}
                        //  spy={true}
                        //  exact='true'
                        //  offset={-80}
                         >
                            להרשמה
                        </Button>
                        <IconButton><ExpandMoreIcon onClick={handleExpandClick}/></IconButton>
                </div>
                <div className={expand2} onClick={handleExpandClick1}>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>כישורי חיים</ServicesH2>
                    <ServicesP>סדנת 'כישורי חיים' - סדנא המיודעת לנערים ונערות בכיתה יב'.
מטרת הסדנא הינה לסייע במעבר מהתיכון לקראת שנת הכנה לצבא/שירות צבאי.
הסדנא מקיפה ושוזרת יחד מספר תחומים ונושאים הקריטיים לשלב בו הינם נמצאים בצורה מקצועית, חוייתית ומדויקת.</ServicesP>
                    <Button
                         to='signup' 
                        //  primary='false'
                        //  dark='false'
                        //  smooth={true}
                        //  duration={100}
                        //  spy={true}
                        //  exact='false'
                        //  offset={-80}
                         >
                            להרשמה
                        </Button>
                        <IconButton><ExpandMoreIcon onClick={handleExpandClick1}/></IconButton>
                </div>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services
