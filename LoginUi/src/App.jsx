import React from 'react'

const App = () => {
  return (
    <div className=' w-full min-h-screen flex items-center justify-center'>
      {/* Login Container */}
      <div className=' w-full max-w-sm flex flex-col items-center justify-center gap-4 rounded-md p-4 shadow-md'>
        {/* Logo */}
        <div className='w-14 h-14 bg-cyan-200 rounded-full flex items-center justify-center'>
          <div className='font-bold text-4xl text-cyan-600'>O</div>
        </div>
        <div className='font-bold text-3xl text-black'>Login</div>

        {/* Input Form */}
        <form className='w-full flex flex-col items-center justify-center gap-5' >
          {/* Email input with label  */}
          <div className=' w-full flex items-center border-b border-gray-300 py-2'>
            <i className="ri-mail-line text-gray-400 mr-2"></i>
            <input
              id="email"
              className='outline-none'
              type="email"
              placeholder='email' />
          </div >
          {/* Password input */}
          <div className=' w-full flex items-center border-b border-gray-300 py-2'>
            <i className="ri-lock-line text-gray-400 mr-2"></i>
            <input
              id="password"
              className='outline-none w-full'
              type="password"
              placeholder='password'/>
          </div>

          {/* Login Button */}
          <button className=' w-full rounded-md mt-4 px-3 py-3 bg-blue-600 text-white text-md font-semibold hover:bg-blue-700 transition-colors'>Login</button>
        </form>

        {/* Link Section */}
        <a href="#" className='text-sm text-blue-600'> or Sign Up</a>
        <a href="#" className='text-sm text-gray-400'> Forgot password?</a>
      </div>
    </div>
  )
}

export default App
