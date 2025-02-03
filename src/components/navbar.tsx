import React, { useState } from "react";
import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";
import { Logout } from "./auth/logout";
import LoginModal from "./auth/login";
import CreateAccountModal from "./auth/createAccount";

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const [createAccountVisible, setCreateAccountVisible] =
    useState<boolean>(false);

  const navigate = useNavigate();

  window.addEventListener("storage", async () => {
    const id = localStorage.getItem("user_id");
    const response = await fetch(`http://localhost:8000/user/${id}/`, {
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
        {user?.first_name} {user?.last_name}
      </span>
      <Logout />
    </>
  );

  const unauthenticatedContent = (
    <>
      <Button
        label="Login"
        icon="pi pi-user"
        onClick={() => setLoginVisible(true)}
      />
      <Button
        label="Create Account"
        icon="pi pi-plus"
        onClick={() => setCreateAccountVisible(true)}
        className="ml-2"
      />
    </>
  );

  return (
    <div>
      <LoginModal visible={loginVisible} onToggle={setLoginVisible} />
      <CreateAccountModal
        visible={createAccountVisible}
        onToggle={setCreateAccountVisible}
      />
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
