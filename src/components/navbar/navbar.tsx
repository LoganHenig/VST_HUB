import React, { useState } from "react";

import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import { useTheme } from "../../context/themeContext";
import { UnauthenticatedContent } from "./unauthenticated";

import { AuthenticatedContent } from "./authenticated";

export const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  window.addEventListener("login", async () => {
    const id = localStorage.getItem("user_id");
    if (id === null || id === undefined) {
      return;
    }

    const response = await fetch(`http://localhost:8108/user/${id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setUser(await response.json());
    }
  });

  window.addEventListener("logout", () => setUser(null));

  const startContent = (
    <React.Fragment>
      <i
        className="pi pi-objects-column"
        style={{
          margin: "auto 1.5rem",
          fontSize: "2.5rem",
          color: "var(--color-vst-blue-400)",
        }}
      ></i>
      <Button
        label="Home"
        icon="pi pi-home"
        onClick={() => {
          navigate("/");
        }}
        size="small"
        text
        style={{ color: "white" }}
      />
      <Button
        label="Browse Products"
        icon="pi pi-box"
        onClick={() => {
          navigate("/search");
        }}
        size="small"
        text
        style={{ color: "white" }}
      />
      <Button
        label={darkMode ? "Dark Mode" : "Light Mode"}
        icon="pi pi-power-off"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        size="small"
        text
        style={{ color: "white" }}
      />
    </React.Fragment>
  );

  return (
    <div>
      <div className="card" id="navbar">
        <Toolbar
          start={startContent}
          end={
            <React.Fragment>
              <div
                className="flex align-items-center gap-2"
                style={{
                  margin: "auto 1.5rem",
                }}
              >
                {user ? (
                  <AuthenticatedContent user={user} />
                ) : (
                  <UnauthenticatedContent />
                )}
              </div>
            </React.Fragment>
          }
          className="bg-gray-900 shadow-2"
          style={{
            borderRadius: "3rem",
            backgroundImage:
              "linear-gradient(to right, var(--bluegray-800), var(--bluegray-600))",
          }}
        />
      </div>
    </div>
  );
};
