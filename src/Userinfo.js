import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import {MdOutlineMessage} from 'react-icons/md'
import {IoMdGlobe} from 'react-icons/io'
function handleShareViaEmail(content) {
  const subject = 'Shared Content';
  const body = encodeURIComponent(content);
  const recipient = 'recipient@example.com';
  
  const emailUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;

  window.location.href = emailUrl;
}
function Userinfo() {
  return (
    <div className='flex items-center ml-[450px]'>
        <span className='text-blue-400 rounded-3xl p-2 px-3 mx-2 border border-black'>Request for edit access</span>
        <MdOutlineMessage  size={30} className='mx-2'/>
        <div className='flex items-center mx-2 bg-gray-100 rounded-3xl px-3 py-2 border-black border'>
            <IoMdGlobe size={20}/> 
            <span className='ml-2'>share</span>
        </div>
        <FaUserCircle className='text-blue-500 mx-2' size={30} />


    </div>
  )
}

export default Userinfo