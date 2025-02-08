import { useNavigate, useParams } from "react-router-dom";
// import { Editor, EditorTextChangeEvent } from "primereact/editor";
// import { Button } from "primereact/button";
import { useState } from "react";
import { ImageAndDiscription } from "../../components/productPageComps/imageAndDiscription";
import { ProductTabSelect } from "../../components/productPageComps/productTabSelect";

export const Product = () => {
  const navigate = useNavigate();

  const { id } = useParams();
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
