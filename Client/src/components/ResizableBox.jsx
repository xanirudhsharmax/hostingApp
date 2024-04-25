
import React, { useState } from 'react';
import './ResizableBox.css';
const ResizableBox = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleMouseDown = (e, direction) => {
    setDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (dx !== 0) {
        setWidth(width + dx);
      }
      if (dy !== 0) {
        setHeight(height + dy);
      }
      setStartX(e.clientX);
      setStartY(e.clientY);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className="resizable-box"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="resizer top"
        onMouseDown={(e) => handleMouseDown(e, 'top')}
      />
      <div
        className="resizer right"
        onMouseDown={(e) => handleMouseDown(e, 'right')}
      />
      <div
        className="resizer bottom"
        onMouseDown={(e) => handleMouseDown(e, 'bottom')}
      />
      <div
        className="resizer left"
        onMouseDown={(e) => handleMouseDown(e, 'left')}
      />
    </div>
  );
};

export default ResizableBox;
