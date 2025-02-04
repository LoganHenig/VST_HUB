import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { FloatLabel } from "primereact/floatlabel";
import { Toast } from "primereact/toast";
import { login } from "../../utils/login";

export default function CreateAccountModal({ visible, onToggle }) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toast = useRef(null);

  const setVisible = (value: boolean) => {
    onToggle(value);
  };

  const showToast = (error: string | null) => {
    let severity = "success";
    let detail = "Account successfully created!";

    if (error) {
      severity = "danger";
      detail = error;
    }

    toast.current.show({
      severity: severity,
      detail: detail,
      life: 5000,
    });
  };

  const create = async () => {
    const data = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8000/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const error = await login(username, password);

        if (error === null) {
          setVisible(false);
          return;
        }
      } else {
        const errorData = await response.json();
        console.log(errorData);
        showToast(errorData || "Could not create account");
      }
    } catch (error) {
      console.log(error);
      showToast("Could not create account");
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      await create();
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <Dialog
        visible={visible}
        modal
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        content={({ hide }) => (
          <div
            className="flex flex-col px-14 py-8 gap-6"
            style={{
              minWidth: "400px",
              borderRadius: "12px",
              backgroundImage:
                "radial-gradient(circle at left top, var(--primary-400), var(--primary-700))",
            }}
          >
            <i
              className="pi pi-objects-column m-auto my-6"
              style={{
                fontSize: "2.5rem",
                color: "white",
              }}
            ></i>
            <div className="inline-flex flex-col gap-2">
              <FloatLabel>
                <label
                  htmlFor="firstName"
                  className="text-primary-50 font-semibold"
                >
                  First Name
                </label>
                <InputText
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="firstName"
                  className="bg-white-alpha-20 border-none p-3 text-primary-50 w-100"
                ></InputText>
              </FloatLabel>
            </div>
            <div className="inline-flex flex-col gap-2">
              <FloatLabel>
                <label
                  htmlFor="lastName"
                  className="text-primary-50 font-semibold"
                >
                  Last Name
                </label>
                <InputText
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastName"
                  className="bg-white-alpha-20 border-none p-3 text-primary-50 w-100"
                ></InputText>
              </FloatLabel>
            </div>
            <div className="inline-flex flex-col gap-2">
              <FloatLabel>
                <label
                  htmlFor="username"
                  className="text-primary-50 font-semibold"
                >
                  Username
                </label>
                <InputText
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  className="bg-white-alpha-20 border-none p-3 text-primary-50 w-100"
                ></InputText>
              </FloatLabel>
            </div>
            <div className="inline-flex flex-col gap-2">
              <FloatLabel>
                <label
                  htmlFor="password"
                  className="text-primary-50 font-semibold"
                >
                  Password
                </label>
                <InputText
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="bg-white-alpha-20 border-none p-3 text-primary-50 w-100"
                  type="password"
                  onKeyUp={handleKeyDown}
                ></InputText>
              </FloatLabel>
            </div>
            <div className="flex align-items-center gap-2">
              <Button
                label="Create"
                onClick={create}
                text
                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
                style={{ color: "white" }}
              ></Button>
              <Button
                label="Cancel"
                onClick={(e) => hide(e)}
                text
                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
                style={{ color: "white" }}
              ></Button>
            </div>
          </div>
        )}
      ></Dialog>
    </>
  );
}
