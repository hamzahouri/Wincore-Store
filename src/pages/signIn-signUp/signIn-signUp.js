import React from 'react'
import './signIn-signUp.styles.scss'
import SignIn from '../../components/signIn/sign-in'
import SignUp from '../../components/sign-up/sign-up';

const SignInSignUp = () => (
    <div className='sign-in-and-sign-up'>
   <SignIn/>
   <SignUp />
    </div>
);

export default SignInSignUp;