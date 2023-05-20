import React, { useState ,useEffect} from 'react';
import { addContentToStore } from './Redux/textAreaContentSlice';
import {  useDispatch , useSelector } from 'react-redux';
import { removeStyles } from './Redux/styleSlice';
const TextEditor = () => {
  
  const [content, setContent] = useState("8React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.");
  const dispatch = useDispatch();
  const styleList = useSelector(store => store.styles.styleList);
  const handleChange = (event) => {
    setContent(event.target.value);
  };
  useEffect(() => {
    handleSelection();
  }, [styleList]);
  const handleContentChange = ()=>{
    dispatch(addContentToStore(content));
  }
  const handleSelection = async (event) =>{
    let textarea = document.querySelector('textarea');
    let start = (textarea.selectionStart);
    let end = (textarea.selectionEnd);
    let modifiedText =content.substring(start,end);
    setTimeout(() => {
      if(styleList.includes("capitalize")){
        modifiedText=modifiedText.toUpperCase();
        const index = styleList.indexOf("capitalize");
        dispatch(removeStyles(index));
      }
      if(styleList.includes("bold")){
        modifiedText = modifiedText.replace(modifiedText, `<b>${modifiedText}</b>`);
        const index = styleList.indexOf("bold");
        dispatch(removeStyles(index));
      }
      let newText = content.substring(0,start)+modifiedText+content.substring(end);
      setContent(newText);
    }, 3000);
    
  }


  
  return (
    <div className="flex flex-col h-[80vh] mt-3 ml-5">
      <textarea
        className="flex-grow p-4 border rounded-md resize-none border-black w-[800px]"
        value={content}
        onChange={(e)=>{
          handleChange(e);
          handleContentChange();
        }}
        onMouseUp={handleSelection}
      ></textarea>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};


export default (TextEditor);
