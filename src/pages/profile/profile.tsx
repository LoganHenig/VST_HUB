import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";

import { logout } from "../../utils/auth";

export function Profile() {
  const navigate = useNavigate();

  const _logout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `http://localhost:8108/auth/local/verify-token/${token}/`
        );

        if (!response.ok) {
          throw new Error("Token verification failed");
        }
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    verifyToken();
  }, [navigate]);

  return (
    <div>
      <p>This is a protected page. Only visible to authenticated users.</p>
      <Button label="Logout" icon="pi pi-sign-out" onClick={_logout} />
    </div>
  );
}
