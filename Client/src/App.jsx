
import React, { useEffect, useState } from 'react';
import ResizableBoxComponent from './components/ResizableBoxComponent';
import Window1 from './components/Window1';
import Window2 from './components/Window2';
import Window3 from './components/Window3';
import './App.css';

function App() {
  const [count,setCount] = useState({WindowOneCount : 0 ,WindowTwoCount : 0, WindowThreeCount : 0  });
  const [docRef,setdocRef]= useState({WindowOne:"4DxnVMv3YlwEb4j57IJ5",WindowTwo:"0X9qhZ728vpnI9IOV3pE",WindowThree:"0fTxiy0xpGWqZzEyzwfl"});
  const [docData,setdocData]= useState({WindowOne:"Sample Text",WindowTwo:"Sample Text",WindowThree:"Sample Text"})
  useEffect(()=>{
    async function fetchData(){
      const res = await fetch("http://localhost:8100/count");
      const data = await res.json();
      // console.log("Mounted Data",data);
      setdocData({WindowOne:data.w1.value,WindowTwo:data.w2.value,WindowThree:data.w3.value})
    }
    fetchData();
  },[])

  useEffect(()=>{
    console.log("docData " ,docData)
  },[docData])

  const handleAdd = async(text,win)=>{
     const res = await fetch("http://localhost:8100/add",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({text:text,win:win})
     });
     const data = await res.json();
      if(data.status){

      if(win == 1){
          setCount({...count,WindowOneCount:count.WindowOneCount+1});
          setdocRef({...docRef,WindowOne:data.doc})
      }else if(win == 2){
        setCount({...count,WindowTwoCount:count.WindowTwoCount+1});
        setdocRef({...docRef,WindowTwo:data.doc})
      }else{
        setCount({...count,WindowThreeCount:count.WindowThreeCount+1});
        setdocRef({...docRef,WindowThree:data.doc})
      }
    }else{
      alert("ERROR While Adding");
    }
  }
  
  const handleUpdate = async(text,win)=>{
    let id = "";
    if(win == 1){
      id = docRef.WindowOne;
    }else if(win == 2){
      id = docRef.WindowTwo;
    }else{
      id = docRef.WindowThree;
    }

    const res = await fetch("http://localhost:8100/update",{
     method:"put",
     headers:{
       "Content-Type":"application/json",
     },
     body:JSON.stringify({id,text,win})
    });
    const data = await res.json();
    if(data.status){

      if(win == 1){
          setCount({...count,WindowOneCount:count.WindowOneCount+1});
          setdocRef({...docRef,WindowOne:data.doc})
      }else if(win == 2){
        setCount({...count,WindowTwoCount:count.WindowTwoCount+1});
        setdocRef({...docRef,WindowTwo:data.doc})
      }else{
        setCount({...count,WindowThreeCount:count.WindowThreeCount+1});
        setdocRef({...docRef,WindowThree:data.doc})
      }
    }else{
      alert("ERROR While Updating");
    }
 }

  return (
    <div className="container">
      <div className="left-box">
        {/* <ResizableBoxComponent /> */}
        <Window1 label="Window1" initial_width={150} initial_height={350} count={count.WindowOneCount} handleAdd={handleAdd} handleUpdate={handleUpdate} docData={docData}/>
      </div>
      <div className="right-box">
        {/* <ResizableBoxComponent /> */}
        <Window2 label="Window2" initial_width={350} initial_height={350} count={count.WindowTwoCount} handleAdd={handleAdd} handleUpdate={handleUpdate} docData={docData}/>
      </div>
      <div className="bottom-box">
        {/* <ResizableBoxComponent /> */}
        <Window3 label="Window3" initial_width={600} initial_height={200} count={count.WindowThreeCount} handleAdd={handleAdd} handleUpdate={handleUpdate} docData={docData}/>
      </div>
    </div>
  );
}

export default App;

