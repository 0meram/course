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
Text,
BackButton
} from './SihgnInElements'

export default function SignIn() {
    

   const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6v4hews', 'template_pp8rjxk', e.target, 'user_4S5qd3ECFtim4kkKRXvDb')
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
        {/* <Container> */}
            <FormWrap id="signup">
                {/* <Icon to="/">Dolla</Icon> */}
                <FormContent>
                <FormH1>שלח לנו פרטים ונחזור אליך בהקדם</FormH1>
                    <Form  onSubmit={sendEmail}>
                        <FormLabel for="fname">שם</FormLabel>
                        <FormInput type="text" required name="name"></FormInput>
                        <FormLabel for="phone">מספר טלפון</FormLabel>
                        <FormInput type="tel" required name="phone" placeholder="050-0000-111" pattern="[0-9]{3}[0-9]{4}[0-9]{3}"></FormInput>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required name="email" placeholder="@gmail.com"></FormInput>
                        <FormLabel>הודעה</FormLabel>
                        <FormInput type="text" name="message"></FormInput>
                        <FormButton type='submit'>שלח</FormButton>
                        {/* <BackButton to='/'>Get back home</BackButton> */}
                        </Form>
                </FormContent>
            </FormWrap>
        {/* </Container> */}
            
        </>
    )
}


