import React from 'react'
import Header from './Header'
import background from '../assets/images/background.webp';

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={background} alt="Background" className='w-full max-w-full h-auto' />
      </div>

      <form className='text-white bg-black'>
        <b> <h2 >Sign In</h2></b>
        <br />
        <input type='text' placeholder='Email' className=' p-1 border-white rounded-md' />
        <br />
        <input type='password' placeholder='Password' className='m-2 p-1 border-white rounded-md' />
        <br />
        <button type='submit' className='bg-red-500 border-2 p-1 w-[188px] mb-2'>Sign In</button>
        <br />
        <p>New to Netflix? <a>Sign up now.</a></p>
      </form>
    </div>
  )
}

export default Login
