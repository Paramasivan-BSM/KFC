import { DataContext } from "./App";
import  { useContext } from "react";
export default function C(){
    const Name = useContext(DataContext);
return(
    <>
    <h1>{Name}</h1>
    
    </>
)
}