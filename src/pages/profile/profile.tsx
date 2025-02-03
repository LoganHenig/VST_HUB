import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../components/auth/logout";

export function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `http://localhost:8000/user/verify-token/${token}/`
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
      <Logout />
    </div>
  );
}
