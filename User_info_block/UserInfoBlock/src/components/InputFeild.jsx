

const InputFeild = ({feildName}) => {
    return (
        <label className='w-full md:w-[45%] lg:w-[32%] flex flex-col gap-2 m-2' htmlFor="">
           {feildName}
            <input className=' border border-gray-400 outline-none rounded-md p-2' type="text" placeholder={feildName} />
        </label>
    )
}

export default InputFeild
