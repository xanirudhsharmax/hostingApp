import React, { useState, useEffect } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import CSS for styling

const ResizableBoxComponent = ({ label, initialWidth, initialHeight,data,count,showPrewrittenText,showTextarea }) => {
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });

  useEffect(() => {
    console.log('initialHeight:', initialHeight);
  }, [initialHeight]);

  const onResize = (event, { size }) => {
    setSize(size);
  };

  

  return (
    <ResizableBox
      width={initialWidth}
      height={initialHeight}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
      resizeHandles={['w', 'e', 'n', 's']}
    >
      <div style={{ border: '1px solid black', background: '#fff', width: '100%', height: '100%' }}>
        <div className="box-content">
        <h2>{label}</h2>
          <p>{data?data:"hello"}</p>
          <p>Count: {count}</p>
        </div>
      </div>
    </ResizableBox>
  );
};

export default ResizableBoxComponent;
