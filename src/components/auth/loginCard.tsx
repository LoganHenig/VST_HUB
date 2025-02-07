import React, { useState, useRef, useEffect } from "react";
import { useMountEffect } from "primereact/hooks";
import { useNavigate } from "react-router";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Messages } from "primereact/messages";

import { login } from "../../utils/auth";

import "./auth.css";

export const LoginCard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const msgs = useRef<Messages>(null);

  useMountEffect(() => {});

  const _login = async () => {
    setLoading(true);
    msgs.current?.clear();

    const error = await login(email, password);
    setLoading(false);

    if (error === null) {
      navigate("/");
    }

    msgs.current?.show({
      id: "1",
      sticky: true,
      severity: "error",
      detail: error,
      closable: true,
    });
  };

  const checkSubmitKeyPress = async (event) => {
    if (event.key === "Enter") {
      await _login();
    }
  };

  const footer = (
    <>
      <span className="flex pt-4 items-center justify-center border-t-1 border-gray-300">
        <p>New user?</p>
        <Button
          label="Create Account"
          link
          onClick={() => navigate(`/users/signup`)}
        />
      </span>
    </>
  );

  return (
    <span className="authCard">
      <Card footer={footer}>
        <div className="flex flex-col px-8 gap-7">
          <Messages ref={msgs} />
          <div className="inline-flex flex-col gap-2">
            <FloatLabel>
              <label htmlFor="email" className="text-primary-50 font-semibold">
                Email
              </label>
              <InputText
                value={email}
                keyfilter="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="w-full"
                onKeyUp={checkSubmitKeyPress}
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
                className="w-full"
                type="password"
                onKeyUp={checkSubmitKeyPress}
              ></InputText>
            </FloatLabel>
          </div>
          <div className="flex align-items-center gap-2">
            <Button
              label="Log in"
              className="w-full"
              onClick={_login}
              loading={loading}
            />
          </div>
        </div>
      </Card>
    </span>
  );
};
