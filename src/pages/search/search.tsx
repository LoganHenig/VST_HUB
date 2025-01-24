import { useNavigate } from "react-router-dom";

export const Search = () =>{
    const navigate = useNavigate();
    return (
    <>
        <h1>Hello, World! search page</h1>
        <button onClick={ ()=>{navigate('/product/123444')} } />
    </>
    )
}
