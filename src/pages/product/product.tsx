import { useNavigate, useParams } from "react-router-dom";
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { Button } from "primereact/button";
import { useState } from "react";

export const Product = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [text, setText] = useState<string>("");

  return (
    <>
      <div className="invert-color" style={{ color: "white" }}>
        <Button
          label="Go Home"
          onClick={() => {
            navigate("/");
          }}
        />
        <Editor
          value={text}
          onTextChange={(e: EditorTextChangeEvent) => setText(e.htmlValue)}
          style={{ height: "320px" }}
        />
        {text}
      </div>
    </>
  );
};
