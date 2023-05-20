import React from 'react';

import {useSelector , useDispatch} from "react-redux"
import { toggleVisibility } from './Redux/menuSlice';
const Sidebar = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector(store => store.menu);
  const handleClick = () =>{
    dispatch(toggleVisibility());
  }
  if(!showMenu.menuVisibilty){
    return null;
  }
  return (
    <>
    <div className="bg-gray-100 w-64 p-4 mx-2 mt-3 " >
      <img src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowback_111142.png" alt="back-icon" className='w-10 ml-2' onClick={handleClick}/>
      <ul className="space-y-2">
        <li className='my-2 shadow-sm p-2 m-1'>
          <a href="https://drive.google.com" className="flex items-center  hover:text-blue-700">
            <img src="https://play-lh.googleusercontent.com/t-juVwXA8lDAk8uQ2L6d6K83jpgQoqmK1icB_l9yvhIAQ2QT_1XbRwg5IpY08906qEw" alt="Google Drive" className="w-6 h-6 mr-2" />
            Google Drive
          </a>
        </li>
        <li className='my-2 shadow-sm p-2 m-1'>
          <a href="https://docs.google.com" className="flex items-center  hover:text-blue-700">
            <img src="https://www.computerhope.com/jargon/g/google-docs.png" alt="Google Docs" className="w-6 h-6 mr-2" />
            Google Docs
          </a>
        </li>
        <li className='my-2 shadow-sm p-2 m-1'>
          <a href="https://sheets.google.com" className="flex items-center  hover:text-blue-700">
            <img src="https://lh3.ggpht.com/e3oZddUHSC6EcnxC80rl_6HbY94sM63dn6KrEXJ-C4GIUN-t1XM0uYA_WUwyhbIHmVMH=w300" alt="Google Sheets" className="w-6 h-6 mr-2" />
            Google Sheets
          </a>
        </li>
        <li className='my-2 shadow-sm p-2 m-1'>
          <a href="https://slides.google.com" className="flex items-center  hover:text-blue-700">
            <img src="https://blogs.shu.ac.uk/shutel/files/2014/08/GSlides.png" alt="Google Slides" className="w-6 h-6 mr-2" />
            Google Slides
          </a>
        </li>
        <li className='my-2 shadow-sm p-2 m-1'>
          <a href="https://calendar.google.com" className="flex items-center  hover:text-blue-700">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png" alt="Google Calendar" className="w-6 h-6 mr-2" />
            Google Calendar
          </a>
        </li>
        <li className='my-2 shadow-sm p-2 m-1'>
          <a href="https://mail.google.com" className="flex items-center  hover:text-blue-700">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"} alt="Gmail" className="w-6 h-6 mr-2" />
            Gmail
          </a>
        </li>
        <li className='my-2 shadow-sm p-2 m-1'>
          <a href="https://meet.google.com" className="flex items-center  hover:text-blue-700">
            <img src={"https://www.lifewire.com/thmb/qbc9R6m4Cw4_1lkwGxfwZliFbaQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Google_Meet-68810718861e456f905639f6bf869864.jpg"} alt="Google Meet" className="w-6 h-6 mr-2" />
            Google Meet
          </a>
        </li>
        <li className='my-2 shadow-sm p-2 m-1'>
          <a href="https://photos.google.com" className="flex items-center  hover:text-blue-700">
            <img src={"https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw"} alt="Google Photos" className="w-6 h-6 mr-2" />
            Google Photos
          </a>
        </li>
        <li className='my-2 shadow-sm p-2 m-1'>
          <a href="https://keep.google.com" className="flex items-center  hover:text-blue-700">
            <img src={"https://cdn-icons-png.flaticon.com/512/2965/2965358.png"} alt="Google Keep" className="w-6 h-6 mr-2" />
            Google Keep
          </a>
        </li> 
        
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
