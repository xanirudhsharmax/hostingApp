import React, { useState,useEffect } from 'react';
import ResizableBoxComponent from './ResizableBoxComponent';

const Window3 = ({ label, initial_width, initial_height, count,handleAdd,docData}) => {

  const [data, setData] = useState(docData.WindowThree );
    
    const inputRef = React.createRef();
    useEffect(()=>{
      setData(docData.WindowThree)
      },[docData])
    const hanadleSubmit =()=>{
      const value = inputRef.current.value;
      setData(value);
      handleAdd(value,3);
      inputRef.current.value = "";
    }
    const handleUpdateDb=()=>{
      const value = inputRef.current.value;
     setData(value);
     handleUpdate(value,3);
     inputRef.current.value = "";
    }
     

  return (
    <div className="left-box">
      <ResizableBoxComponent label={label} initialWidth={initial_width} initialHeight={initial_height} count ={count} data={data}/>
      <div className="button-container">
        <button onClick={hanadleSubmit}>Add</button>
        <button onClick={handleUpdateDb}>Update</button>
      </div>
      <textarea ref={inputRef} rows={4} cols={23} />
      {/* <p>Count: {count}</p> */}
    </div>
  );
};

export default Window3;
