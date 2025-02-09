import { Button } from "primereact/button";
import { useState } from "react";

export const GoogleLogin = ({ text = "Sign in with Google" }) => {
  const [loading, setLoading] = useState(false);

  const custom_login = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/auth/google/login/`
      );
      if (!response.ok) {
        setLoading(false);
        return;
      }
      const data = await response.json();
      window.open(data.url, "_self");
    } catch (exc) {
      console.log(exc);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      label={text}
      icon="pi pi-google"
      severity="contrast"
      loading={loading}
      onClick={custom_login}
    />
  );
};
