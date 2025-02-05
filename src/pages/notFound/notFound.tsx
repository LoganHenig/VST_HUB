import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello, World! Theres nothing here</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      />
    </>
  );
};
