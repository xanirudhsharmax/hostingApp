import express from "express"
import db from "./firebaseinit.js";
import { addDoc, collection, doc, getDoc, getDocs, increment, updateDoc } from "firebase/firestore";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/count",async(req,res)=>{
    const result = await getDoc(doc(db,"Count","fviacZg0OBtMe3EK8x42"))
    const count = result.data();
    const resultOne = await getDoc(doc(db,"WindowOne","4DxnVMv3YlwEb4j57IJ5"))
    const resultTwo = await getDoc(doc(db,"WindowTwo","0X9qhZ728vpnI9IOV3pE"))
    const resultThree = await getDoc(doc(db,"WindowThree","0fTxiy0xpGWqZzEyzwfl"))
    res.send({count:count,w1:resultOne.data(),w2:resultTwo.data(),w3:resultThree.data()})
});
app.post("/add",async (req,res)=>{
    const data = req.body;
    let collectionName = "";
    try{
    if(data.win ==  1){
        collectionName = "WindowOne";
        await updateDoc(doc(db,"Count","fviacZg0OBtMe3EK8x42"),{
            WindowOneCount : increment(1)
        })
    }else if(data.win == 2){ 
        collectionName ="WindowTwo";
        await updateDoc(doc(db,"Count","fviacZg0OBtMe3EK8x42"),{
            WindowTwoCount :increment(1)
        })
    }else{
        collectionName ="WindowThree";
        await updateDoc(doc(db,"Count","fviacZg0OBtMe3EK8x42"),{
            WindowThreeCount :increment(1)
        })
    }
    const result = await addDoc(collection(db,collectionName),{
        value : data.text,
    });
    // console.log("Result",result.id)
    res.json({status:true,doc:result.id})

}catch(err){
    console.log("Error While Adding ",err.message);
    res.json({status:false,msg:err.message})
}
    // const result = await 
});
app.put("/update",async(req,res)=>{
   const data = req.body;
   console.log(data)
   let collectionName = "";
    try{
    if(data.win ==  1){
        collectionName = "WindowOne";
        await updateDoc(doc(db,"Count","fviacZg0OBtMe3EK8x42"),{
            WindowOneCount : increment(1)
        })
    }else if(data.win == 2){ 
        collectionName ="WindowTwo";
        await updateDoc(doc(db,"Count","fviacZg0OBtMe3EK8x42"),{
            WindowTwoCount :increment(1)
        })
    }else{
        collectionName ="WindowThree";
        await updateDoc(doc(db,"Count","fviacZg0OBtMe3EK8x42"),{
            WindowThreeCount :increment(1)
        })
    }
    console.log("before result",data)
    const result = await updateDoc(doc(db,collectionName,data.id),{
        value : data.text,
    });
    // console.log("Result",result.id)
    res.json({status:true})

}catch(err){
    console.log("Error While Updating ",err.message);
    res.json({status:false,msg:err.message})
}
   
});
app.listen(8100,()=>{
    console.log("server is listening at 8100")});
    // post -add // put -update  
    // How to add data in firebase 
    // create API (express-framework)
    // render - backend 
    // versal,netlify -frontend react 