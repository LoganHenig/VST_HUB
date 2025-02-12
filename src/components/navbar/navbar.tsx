import React, { useContext, useEffect, useState } from "react";
import { data, useSearchParams } from "react-router";

import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import { useTheme } from "../../context/themeContext";
import { UnauthenticatedContent } from "./unauthenticated";

import { AuthenticatedContent } from "./authenticated";
import { fetchUser, fetchAccount } from "../../utils/auth/base";
import { AuthContext } from "../../context/authContext";

export const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [params] = useSearchParams();
  const { user, setUser, account, setAccount, token, setToken } =
    useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const access_token = params.get("access_token");
    if (access_token) {
      setToken({
        access_token: access_token,
        token_type: params.get("token_type") || "vst-realm",
        expires_in: params.get("expires_in"),
        provider: params.get("provider"),
      });
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
