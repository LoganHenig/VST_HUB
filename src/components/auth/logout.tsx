import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { logout } from "../../utils/auth";

export function Logout() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const _logout = () => {
    setLoading(true);
    logout();
    setLoading(false);
    navigate("/");
};  

  return <Button label="Logout" onClick={_logout} loading={loading} />;
}
