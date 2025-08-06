import React from 'react'
import Header from '../Header/Header'
import background from '../../assets/images/background-net.jpg';

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={background} alt="Background" className='w-full max-w-full h-auto bg-black/40' />
      </div>
          

      <form className='absolute bg-black text-white w-[25%] my-36 mx-auto left-0 right-0'>
        <b> <h2 >Sign In</h2></b>
        <br />
        <input type='text' placeholder='Email Address' className=' p-2 m-2' />
        <br />
        <input type='password' placeholder='Password' className='m-2 p-2 ' />
        <br />
        <button type='submit' className='bg-red-500 border-2 p-42m-2'>Sign In</button>
        <br />
        <p>New to Netflix? <a>Sign up now.</a></p>
      </form>
    </div>
  )
}

export default Login
