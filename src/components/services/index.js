import React, {useState} from 'react'
import Icon1 from '../../images/afim.jpg'
import Icon2 from '../../images/young.jpg'
import {Button} from "../ButtonElements"
import "./services.css"
import IconButton from '@material-ui/core/IconButton';

import {
ServicesContainer,
ServicesH1,
ServicesWrapper,
MoreDetails,
ServicesIcon,
ServicesH2,
ServicesP,
Icon,
IconUp,
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
                  <div className="inner">
                    <ServicesIcon src={Icon1} />
                    </div>
                    <ServicesH2>עפים על החיים</ServicesH2>
                    {showMore ? <ServicesP >בואו נהיה עניינים בדברים הכי חשובים בחיים משוחררים ומשוחררות משירות צבאי או לאומי? סדנת הכנה לחיים שנוגעת בכל הדברים החשובים והמעניינים באמת</ServicesP> : <ServicesP>
מטרת הסדנא הינה לסייע ולהוות מקפצה במעבר מהשירות לאומי/צבאי אל האזרחות.
הסדנא מתכללת ושוזרת מספר תחומים ונושאים משמעותיים לשלב בו הנכם נמצאים בצורה מקצועית, חוויתית ומדויקת. 
הסדנא מתמקדת בשלושה תחומים מרכזיים: פיתוח אישי, התנהלות כלכלית והכוונה תעסוקתית ולימודית.
בנוסף, אנו מעניקים לכל חניך מפגש אישי, אחד על אחד עם גורמי ההדרכה על מנת לדייק את התוכן הנלמד לעולמו האישי של כל חניך ולהוציאו לפועל בצורה הטובה והיעילה ביותר.</ServicesP>}
                    <Button
                        to='signup'>
                            להרשמה
                        </Button>
                        <MoreDetails>לפרטים נוספים</MoreDetails>
                        <IconButton>
                          {showMore ? <Icon onClick={handleExpandClick}/> : <IconUp onClick={handleExpandClick}/>}
                          </IconButton>
                </div>
                <div className={expand2} onClick={handleExpandClick1}>
                <div className="inner">
                    <ServicesIcon src={Icon2} />
                    </div>
                    <ServicesH2>כישורי חיים</ServicesH2>
                    {showMore1 ? <ServicesP>הגיע הזמן לתפוס את עצמכם בידיים סדנא המיועדת לנערים ונערות בכיתה יב' אשר מעוניינים לבצע את הקפיצה לחיים האמיתיים בצורה משמעותית, איכותית וחוויתית</ServicesP>:<ServicesP>
מטרת הסדנא הינה להכווין, לפתח ולהעניק מקפצה לחניך במעבר מהתיכון לשנת מכינה קדם צבאית ,או שירות צבאי ולאומי. 
הסדנא מתכללת ושוזרת יחד מספר תחומים ונושאים משמעותיים לשלב בו הנכם נמצאים בצורה מקצועית, חוויתית ומדויקת כגון התנהלות בזמן, התנהלות כלכלית, חלומות, יזמות ועוד.</ServicesP> }
                    <Button
                        to='signup'>
                            להרשמה
                        </Button>
                        <MoreDetails>לפרטים נוספים</MoreDetails>
                        <IconButton>  {showMore1 ? <Icon onClick={handleExpandClick1}/> : <IconUp onClick={handleExpandClick}/>}</IconButton>
                </div>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services
