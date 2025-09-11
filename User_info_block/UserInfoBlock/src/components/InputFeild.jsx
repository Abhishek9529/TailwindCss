

const InputFeild = ({feildName}) => {
    return (
        <label className='w-full flex flex-col text-bold' htmlFor="">
           {feildName}
            <input className=' border border-gray-300 shadow-sm shadow-gray-100 mt-2 outline-none rounded-md focus:ring-2 focus:ring-blue-500 p-2' type="text" placeholder={feildName} />
        </label>
    )
}

export default InputFeild
