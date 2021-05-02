import React from 'react';
import emailjs from 'emailjs-com'
import {
Container,
FormWrap,
Form,
FormH1,
FormLabel,
FormInput,
FormButton,
NamePhoneCon,
FormNameInput,
FormPhoneInput,
FormMassegeInput,
FormSelectOption,
FormSelect,
} from './SihgnInElements'

export default function SignIn() {
    

   const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6v4hews', 'template_z3426fl', e.target, 'user_4S5qd3ECFtim4kkKRXvDb')
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
            <FormH1>דור העתיד זה אתם ואנחנו כאן בשבילכם</FormH1>
                    <Form  onSubmit={sendEmail}>
                        <FormLabel for="phone">אני מעוניין לקבל פרטים על</FormLabel>
                        <FormSelect name="course" id="course">
                        <FormSelectOption value="עפים על החיים">סדנאת עפים על החיים</FormSelectOption>
                        <FormSelectOption value="כישורי חיים">סדנאת כישורי חיים </FormSelectOption>
                        <FormSelectOption value="תרומה  ">תרומה </FormSelectOption>
                        <FormSelectOption value="עניין אחר ">בנושא אחר </FormSelectOption>
                        </FormSelect>
                        <NamePhoneCon>
                        <FormPhoneInput type="tel" required name="phone" placeholder="מספר טלפון" pattern="[0-9]{3}[0-9]{4}[0-9]{3}"></FormPhoneInput>
                        <FormNameInput type="text" required name="name" placeholder="שם"></FormNameInput>
                        </NamePhoneCon>
                        <FormInput type='email' required name="email" placeholder="אימייל"></FormInput>
                        <FormMassegeInput type="text" name="message"  placeholder="תכתבו לנו "></FormMassegeInput>
                        <FormButton type='submit'>שלח</FormButton>
                        </Form>
            </FormWrap>
        </Container>
            
        </>
    )
}


