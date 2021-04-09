import React from 'react'
import SignIn from '../components/signIn'
import {BackButton} from '../components/signIn/SihgnInElements'

const SignInPage = () => {
    return (
        <>
           <SignIn />
              <BackButton to='/'>Get back home</BackButton>
        </>
    )
}

export default SignInPage
