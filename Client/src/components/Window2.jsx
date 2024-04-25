import React, { useState,useEffect } from 'react';
import ResizableBoxComponent from './ResizableBoxComponent';

const Window2 = ({ label, initial_width, initial_height,count,handleAdd ,docData}) => {

  const [data, setData] = useState(docData.WindowTwo );
    // const [count, setCount] = useState(0);
    
    const inputRef = React.createRef();
    useEffect(()=>{
      setData(docData.WindowTwo)
      },[docData])
    const hanadleSubmit =()=>{
      const value = inputRef.current.value;
      setData(value);
      handleAdd(value,2);
      inputRef.current.value = "";
    }
    const handleUpdateDb=()=>{
      const value = inputRef.current.value;
     setData(value);
     handleUpdate(value,2);
     inputRef.current.value = "";
    }
    
    
      

  return (
    <div className="left-box">
      <ResizableBoxComponent label={label} initialWidth={initial_width} initialHeight={initial_height} count={count} data={data} />
      <div className="button-container">
        <button onClick={hanadleSubmit}>Add</button>
        <button onClick={handleUpdateDb}>Update</button>
      </div>
      <textarea  ref={inputRef} rows={4} cols={23} />
    </div>
  );
};

export default Window2;
