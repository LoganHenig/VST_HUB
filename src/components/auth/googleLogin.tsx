import { Button } from "primereact/button";

export const GoogleLogin = ({ text = "Sign in with Google" }) => {
  const custom_login = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/auth/google/login/`
    );
    const data = await response.json();

    window.open(data.url, "_self");
  };

  return (
    <Button
      label={text}
      icon="pi pi-google"
      outlined
      severity="info"
      onClick={custom_login}
    />
  );
};
