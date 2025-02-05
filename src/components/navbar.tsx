import React, { useState } from "react";
import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import { Logout } from "./auth/logout";
import { useTheme } from "../context/themeContext";

export const Navbar = () => {
  
  const { darkMode, setDarkMode } = useTheme();
  // const store = useAppSelector((store) => store.user);
  // const dispatch = useAppDispatch();
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
        severity="secondary"
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
        severity="secondary"
        style={{ color: "white" }}
      />
      <Button
        label={darkMode ? 'Dark Mode' : 'Light Mode'}
        icon="pi pi-power-off"
        onClick={() => {
          setDarkMode(!darkMode)
        }}
        size="small"
        text
        severity="secondary"
        style={{ color: "white" }}
      />
    </React.Fragment>
  );

  const authenticatedContent = (
    <>
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
        className="m-auto"
      />
      <span
        className="font-bold text-bluegray-50 m-auto ml-1 mr-6"
        style={{ color: "white" }}
      >
        {user?.given_name} {user?.family_name}
      </span>
      <Logout />
    </>
  );

  const unauthenticatedContent = (
    <>
      <Button
        label="Login"
        icon="pi pi-user"
        onClick={() => navigate("/users/login")}
      />
    </>
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
                {localStorage.getItem("token")
                  ? authenticatedContent
                  : unauthenticatedContent}
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
