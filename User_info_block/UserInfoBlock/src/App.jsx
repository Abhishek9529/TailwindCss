
import InputFeild from './components/InputFeild'

const App = () => {
  return (
    <div className='w-full h-screen p-4  '>
      {/* Header */}
      <div >
        <h2 className='text-xl font-semibold mb-2'>Basic Information</h2>
        <p className='text-gray-600 textsm mb-4'>Update your profile information below.</p>
      </div>
      {/* container */}
      <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6  '>
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
