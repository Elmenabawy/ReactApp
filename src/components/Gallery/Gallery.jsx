import React, { useEffect, useState } from 'react'

export default function Gallery() {
let[count ,setCount] =  useState(0);
    

//component did mount (call first) as the array is empty
useEffect(()=>{
    console.log("component did mount")
},[] );

//component did update (call every update) as the array has the count value
useEffect(()=>{

    if(count === 0){
        return
    }
    console.log("component did update")
},[count])
    return  (
        <>
        <h2>Gallery comp</h2>
        <h4>Count :{count}</h4>
        <button className='btn btn-danger' onClick={()=>setCount(Math.random())}>change</button>
        </>
    )
}
