import { useParams } from "react-router-dom";

export const Product = () =>{
    const { id } = useParams();
    return (
    <h1>Hello, World! Product page {id}</h1>
    )
}