import React from 'react'
import GoogleLogin from 'react-google-login'

const Login = () => {

  const  responseGoogle = (response)=>{
        console.log(response);
        console.log(response.profileObj);
        window.location.href='/home'
        
    }

  return (
    <div className='d-flex justify-content-center mt-5'>
        <GoogleLogin
        clientId='750912508668-d8l1d5u6a2513q32ltnk6ro7503te1v9.apps.googleusercontent.com'
        buttonText='Login with Google'
        onSuccess={responseGoogle}
        onFailure = {responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
    </div>
  )
}

export default Login