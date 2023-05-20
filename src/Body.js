import React from 'react'
import Sidebar from './Sidebar' 
import TextEditor from './TextEditor'

import {BsPrinter} from "react-icons/bs"
import {BsArrow90DegLeft} from "react-icons/bs"
import {BsArrow90DegRight} from "react-icons/bs"

import { RiAlignLeft, RiAlignCenter, RiAlignRight } from 'react-icons/ri';
import {FiEdit2} from "react-icons/fi"
import {BsThreeDotsVertical} from "react-icons/bs"

import {MdOutlineInsertPhoto  , MdOutlineInsertLink , MdOutlineInsertComment} from "react-icons/md"

import { useDispatch } from 'react-redux'
import { updateStyles } from './Redux/styleSlice'
function Body() {
  
  const dispatch = useDispatch();
  const handleCapital = () =>{
    dispatch(updateStyles("capitalize"));
  }
  const handleBold = () =>{
    dispatch(updateStyles("bold"));
  }
  return (
    <>
    <div className='w-[99vw] h-10 bg-blue-50 mt-1 border flex '>
      <span className='mx-2 my-auto cursor-pointer'><BsArrow90DegLeft size={20}/></span>
      <span className='mx-2 my-auto cursor-pointer'><BsArrow90DegRight size={20}/></span>
      <span className='mx-2 my-auto cursor-pointer' ><BsPrinter size={20}/></span>
      <span className='font-bold mx-2 my-auto text-xl cursor-pointer' onClick={handleCapital}> A</span>
      <select name='Title' className='ml-3 rounded-md bg-blue-50' >
        <option value="someOption"> Title </option>
        <option value="otherOption">Sub-Title</option>
        <option value="otherOption">Heading-1</option>
        <option value="otherOption">Heading-2</option>
      </select>
      <select name='100% '  className='ml-3 rounded-md bg-blue-50'>
        <option value="someOption"> 100% </option>
        <option value="otherOption"> 80%</option>
        <option value="otherOption"> 70%</option>
        <option value="otherOption"> 60%</option>
        <option value="otherOption"> 50%</option>
        <option value="otherOption"> 40%</option>
        <option value="otherOption"> 30%</option>
        <option value="otherOption"> 20%</option>
        <option value="otherOption"> 10%</option>
      </select>
      <select name='Title' className='ml-3 rounded-md bg-blue-50' >
        <option value="someOption"> Roboto </option>
        <option value="otherOption">Sen - serif</option>
        <option value="otherOption">Cursive</option>
        <option value="otherOption">Roboto</option>
      </select>
      <span className='mt-1'><span className='mx-2 my-auto text-2xl'>+</span><span className='mx-2 text-l border-2 border-black px-1 '>20</span><span className='mx-2 my-auto text-2xl'>-</span></span>
      <span className='mx-2 my-auto cursor-pointer' onClick={handleBold}> B </span>
      <span className='mx-2 my-auto cursor-pointer'> I </span>
      <span className='mx-2 my-auto cursor-pointer'> U </span>
      <span className='mx-2 my-auto cursor-pointer'> A </span>
      <MdOutlineInsertLink size={25} className='mx-2 my-auto'/>
      <MdOutlineInsertPhoto size={25} className='mx-2 my-auto'/>
      <MdOutlineInsertComment size={20} className='mx-2 my-auto'/>
      
      <RiAlignLeft size={24} className='mx-2 my-auto ml-[150px]' />
      <RiAlignCenter size={24} className='mx-2 my-auto' />
      <RiAlignRight size={24} className='mx-2 my-auto'/>
      <BsThreeDotsVertical size={20} className='mx-2 my-auto'/>
      <FiEdit2 size={20} className='mx-2 my-auto'/>
      

    </div>
    
      <div className='flex bg-gray-100'>
          
          <Sidebar/>
          <TextEditor/>
      </div>
    </>
  )
}

export default Body