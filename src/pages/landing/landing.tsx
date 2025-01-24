import React from "react"
import { useNavigate } from "react-router-dom";

export const Landing = () =>{
    const navigate = useNavigate();
    return (
    <>
        <h1>Hello, World! landing page</h1>
        <button onClick={ ()=>{navigate('/search')} } />
    </>
    )
}
