import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleVisibility } from './Redux/menuSlice';
function FileOptions() {
  const dispatch = useDispatch();
  function handleMenuClick(){
    dispatch(toggleVisibility())
  }
  return (
    <div>
        <span className='mx-2 my-1'>File</span>
        <span className='mx-2 my-1'>Edit</span>
        <span className='mx-2 my-1'>View</span>
        <span className='mx-2 my-1'>Tools</span>
        <span className='mx-2 my-1'>Help</span>
        <span className='mx-2 my-1 cursor-pointer' onClick={handleMenuClick}>Sidebar</span>
    </div>
  )
}

export default FileOptions