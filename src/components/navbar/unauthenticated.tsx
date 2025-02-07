import { Button } from "primereact/button";
import { useNavigate } from "react-router";

export const UnauthenticatedContent = () => {
  const navigate = useNavigate();

  return (
    <Button
      label="Login"
      icon="pi pi-user"
      onClick={() => navigate("/users/login")}
      size="small"
      text
      style={{ color: "white" }}
    />
  );
};
