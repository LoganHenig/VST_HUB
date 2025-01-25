import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';

export const Landing = () =>{
    const navigate = useNavigate();
    return (<>
        <h1>Hello, World! landing page</h1>
        <Button label="Search Products" onClick={ ()=>{navigate('/search')} } />
        <h1 className="text-3xl font-bold underline text-vst-blue-200 ">
            Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline text-vst-blue-300 ">
            Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline text-vst-blue-400 bg-vst-blue-800">
            Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline text-vst-blue-500 ">
            Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline text-vst-blue-600 ">
            Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline text-vst-blue-700 ">
            Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline text-vst-blue-800 ">
            Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline text-vst-blue-900 ">
            Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline text-vst-blue-1000 ">
            Hello world!
        </h1>
    </>)
}
