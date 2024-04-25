import React, { useState,useRef, useEffect} from 'react';
import ResizableBoxComponent from './ResizableBoxComponent';


const Window1 = ({ label, initial_width, initial_height,count,handleAdd,handleUpdate,docData }) => {

    const [data, setData] = useState(docData.WindowOne);
    
    // const [count, setCount] = useState(0);
    const [showPrewrittenText, setShowPrewrittenText] = useState(true);
    const [showTextarea, setShowTextarea] = useState(true);
    const [textareaValue, setTextareaValue] = useState('');
    const inputRef = React.createRef();

      useEffect(()=>{
      setData(docData.WindowOne)
      },[docData])
    const handleUpdateDb=()=>{
         const value = inputRef.current.value;
        setData(value);
        handleUpdate(value,1);
        inputRef.current.value = "";

    }
    const hanadleSubmit =()=>{
      const value = inputRef.current.value;
      setData(value);
      handleAdd(value,1);
      inputRef.current.value = "";
    }

  return (
    <div className="left-box">
      <ResizableBoxComponent label={label} initialWidth={initial_width} initialHeight={initial_height} count={count} data ={data} showPrewrittenText={setShowPrewrittenText} showTextarea = {showTextarea} />
      <div className="button-container">
        <button onClick={hanadleSubmit}>Add</button>
        <button onClick={handleUpdateDb}>Update</button>
      </div>

        <div>
          <textarea  ref={inputRef}   rows={4} cols={23} />
        </div>
    </div>
  );
};

export default Window1;
