import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ImageAndDiscription } from "../../components/productPageComps/imageAndDiscription";
import { ProductTabSelect } from "../../components/productPageComps/productTabSelect";
import { useAppDispatch } from "../../utils/hooks";
import { setCommentsInStore, setId } from "../../utils/reduxSlices/productSlice";

export const Product = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  useEffect(() => {
    if(id){
      
      dispatch(setCommentsInStore([]))
      dispatch(setId(id))
    }
  },[id])

  return (
    <>
      {id &&
          <div className="flex flex-col w-screen justify-center items-center">
            <ImageAndDiscription id={id}/>
            <ProductTabSelect/>
          </div>
      }
    </>
  );
};
