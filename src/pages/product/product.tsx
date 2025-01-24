import { useNavigate, useParams } from "react-router-dom";

export const Product = () =>{
    const navigate = useNavigate();
    const { id } = useParams();


    return (<>
        <h1>Hello, World! Product page {id}</h1>
        <button onClick={ ()=>{navigate('/')} } />
    </>)
}