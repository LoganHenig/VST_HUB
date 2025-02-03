import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

export function Logout() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    setLoading(true);
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setLoading(false);
    navigate("/");
  };

  return <Button label="Logout" onClick={logout} loading={loading} />;
}
