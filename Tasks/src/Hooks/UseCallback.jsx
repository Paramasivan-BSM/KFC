import React, { useCallback, useEffect, useState } from 'react'

export const UseCallback = () => {
  let URL = "https://fakestoreapi.com/products";
  let [products,setproducts] = useState()

const FetchProducts = useCallback(
    // async ()=>{
    // const res = await fetch(URL)
    // const data = await res.json()
    // setproducts(data)
    // console.log(data);
    ()=>{
        fetch(URL).then((res)=>res.json()).then((data)=>{console.log(data)})
    }
,[URL]) 

useEffect(()=>{
    FetchProducts()
},[FetchProducts])
  return (
    <div></div>
  )
}
