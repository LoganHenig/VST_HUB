import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';

export const Landing = () =>{
    const navigate = useNavigate();
    return (<>
        <h1>Hello, World! landing page</h1>
        <Button label="Search Products" onClick={ ()=>{navigate('/search')} } />
    </>)
}
