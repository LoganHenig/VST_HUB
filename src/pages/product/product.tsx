import { useNavigate, useParams } from "react-router-dom";
// import { Editor, EditorTextChangeEvent } from "primereact/editor";
// import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { ImageAndDiscription } from "../../components/productPageComps/imageAndDiscription";
import { ProductTabSelect } from "../../components/productPageComps/productTabSelect";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { setCommentsInStore, setId } from "../../utils/reduxSlices/productSlice";

export const Product = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { id } = useParams();
  useEffect(() => {
    if(id){
      
      dispatch(setCommentsInStore([]))
      dispatch(setId(id))
    }
  },[id])
  const [text, setText] = useState<string>("");

  return (
    <>
      {id &&
          <div className="flex flex-col w-screen justify-center items-center">
            <ImageAndDiscription id={id}/>
            <ProductTabSelect/>
          </div>
      }



        {/* <Editor
          value={text}
          onTextChange={(e: EditorTextChangeEvent) => setText(e.htmlValue)}
          style={{ height: "320px" }}
        />
        {text} */}

    </>
  );
};
