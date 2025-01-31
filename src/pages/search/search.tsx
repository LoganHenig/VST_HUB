import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <>
      <h1>Hello, World! search page {search}</h1>
      <FloatLabel>
        <label htmlFor="search">Search for a Product...</label>
        <InputText
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FloatLabel>
      <Button
        onClick={() => {
          navigate("/product/123444");
        }}
      />
    </>
  );
};
