import React from 'react';
import emailjs from 'emailjs-com'
import {Button} from '../ButtonElements'
import {
Container,
FormWrap,
Icon,
FormContent,
Form,
FormH1,
FormLabel,
FormInput,
FormButton,
NamePhoneCon,
FormNameInput,
FormPhoneInput,
FormMassegeInput,
Text,
BackButton,

} from './SihgnInElements'

export default function SignIn() {
    

   const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7t04mjz', 'template_z3426fl', e.target, 'user_4S5qd3ECFtim4kkKRXvDb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        alert("נשלח בהצלחה ! נחזור אליך בהקדם" )
        }

    return (
        <>
        <Container id="signup">
            <FormWrap >
            <FormH1>שלח\י אלינו פרטים ונחזור אליך בהקדם</FormH1>
                {/* <Icon to="/">Dolla</Icon> */}
                    <Form  onSubmit={sendEmail}>
                        
                        <NamePhoneCon>
                        {/* <FormLabel for="fname">שם</FormLabel> */}
                        <FormPhoneInput type="tel" required name="phone" placeholder="מספר טלפון" pattern="[0-9]{3}[0-9]{4}[0-9]{3}"></FormPhoneInput>
                        <FormNameInput type="text" required name="name" placeholder="שם"></FormNameInput>
                        {/* <FormLabel for="phone">מספר טלפון</FormLabel> */}
                        </NamePhoneCon>
                        {/* <FormLabel htmlFor='for'>Email</FormLabel> */}
                        <FormInput type='email' required name="email" placeholder="אימייל"></FormInput>
                        {/* <FormLabel>הודעה</FormLabel> */}
                        <FormMassegeInput type="text" name="message"  placeholder="תכתבו לנו "></FormMassegeInput>
                        <FormButton type='submit'>שלח</FormButton>
                        {/* <BackButton to='/'>Get back home</BackButton> */}
                        </Form>
            </FormWrap>
        </Container>
            
        </>
    )
}


