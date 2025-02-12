import React, { useState, useRef, useEffect, useContext } from "react";
import { useMountEffect } from "primereact/hooks";
import { useNavigate } from "react-router";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Messages } from "primereact/messages";

import { login as local_login } from "../../utils/auth/local";
import { login as google_login } from "../../utils/auth/google";

import "./auth.css";
import { GoogleLogin } from "./googleLogin";
import { AuthContext } from "../../context/authContext";

export const LoginCard = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const msgs = useRef<Messages>(null);

  useMountEffect(() => {});

  const _login = async (provider: string = "local") => {
    let data = null;
    let error = null;
    setLoading(true);
    msgs.current?.clear();

    if (provider === "local") {
      const { data: _data, error: _error } = await local_login(email, password);
      data = _data;
      error = _error;
      console.log(data, error);
    } else if (provider === "google") {
      const { data: _data, error: _error } = await google_login();
      data = _data;
      error = _error;
    } else {
      return;
    }

    setLoading(false);
    if (error === null && data !== null) {
      setToken(data?.access_token);
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
    <span className="flex flex-col gap-4">
      <span className="flex py-4 items-center justify-center border-t-1 border-b-1 border-gray-300">
        <p>New user?</p>
        <Button
          label="Create Account"
          link
          onClick={() => navigate(`/users/signup`)}
        />
      </span>
      <GoogleLogin />
    </span>
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
