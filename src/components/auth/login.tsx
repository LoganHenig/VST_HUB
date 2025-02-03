import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { FloatLabel } from "primereact/floatlabel";
import { Toast } from "primereact/toast";
import { login } from "../../utils/login";

export default function LoginModal({ visible, onToggle }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toast = useRef(null);

  const setVisible = (value: boolean) => {
    onToggle(value);
  };

  const showToast = (error: string | null) => {
    let severity = "success";
    let detail = "Successfully logged in!";

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

  const _login = async () => {
    const error = await login(username, password);

    showToast(error);

    if (error === null) {
      setVisible(false);
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      await _login();
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
                label="Sign-In"
                onClick={_login}
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
