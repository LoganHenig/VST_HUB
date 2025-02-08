import React, { useEffect, useState } from "react";

import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import { useTheme } from "../../context/themeContext";
import { UnauthenticatedContent } from "./unauthenticated";

import { AuthenticatedContent } from "./authenticated";
import { fetchActiveAccount, fetchAuthenticatedUser } from "../../utils/auth";
import { useSearchParams } from "react-router";

export const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [params] = useSearchParams();
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      setUser(await fetchAuthenticatedUser());
      setAccount(await fetchActiveAccount());
    };

    const access_token = params.get("access_token");
    if (access_token) {
      localStorage.setItem("token", access_token);
      fetchUserInfo();
    }
  });

  window.addEventListener("login", async () => {
    setUser(await fetchAuthenticatedUser());
    setAccount(await fetchActiveAccount());
  });

  window.addEventListener("logout", () => {
    setUser(null);
    setAccount(null);
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
                  <AuthenticatedContent user={user} account={account} />
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
