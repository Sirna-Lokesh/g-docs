import React from 'react'
import {BsFillCloudCheckFill} from "react-icons/bs"

function Fileinfo() {
  return (
    <div className='flex'>
        <h3 className='ml-2 '><span className='text-xl font-bold'>Front_end_Resume </span><span className='bg-blue-500 text-white rounded-sm mx-1 px-1'>.DOCX</span> </h3>
        <BsFillCloudCheckFill size={20} className='ml-8 mt-2'/>
    </div>
  )
}

export default Fileinfo