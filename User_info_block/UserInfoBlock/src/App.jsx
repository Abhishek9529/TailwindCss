import React from 'react'
import InputFeild from './components/InputFeild'

const App = () => {
  return (
    <div className='w-full h-screen p-4  '>
      <p>Basic Information</p>
      <p>Update your profile information below.</p>
      {/* container */}
      <div className='w-full  md:flex-wrap  md:flex  '>
        <InputFeild
          feildName={"First Name"}
        />
        <InputFeild
          feildName={"Last Name"}
        />
        <InputFeild
          feildName={"I'm"}
        />
        <InputFeild
          feildName={"Birth Date"}
        />
        <InputFeild
          feildName={"Profession"}
        />
        <InputFeild
          feildName={"Email"}
        />
        <InputFeild
          feildName={"Confirm Email"}
        />
        <InputFeild
          feildName={"Location"}
        />
        <InputFeild
          feildName={"Phone Number"}
        />
        <InputFeild
          feildName={"Language"}
        />
        <InputFeild
          feildName={"Skills"}
        />
      </div>

    </div>
  )
}

export default App
