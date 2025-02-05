import React, { useState } from "react";
import { useNavigate } from "react-router";

import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

import { login } from "../../utils/auth";

import "./auth.css";


export const LoginCard = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const _login = async () => {
        const error = await login(email, password);

        if (error === null) {
            navigate('/')
        }
    };

    const checkSubmitKeyPress = async (event) => {
        if (event.key === "Enter") {
            await _login();
        }
    };

    const footer = (<>
        <span className="flex pt-4 items-center justify-center border-t-1 border-gray-300">
            <p>New user?</p>
            <Button label="Create Account" link onClick={() => navigate(`/users/signup`)} />
        </span>
    </>)

    return (<span className="authCard">
        <Card footer={footer}>
          <div className="flex flex-col py-4 px-8 gap-6">
            <div className="inline-flex flex-col gap-2">
              <FloatLabel>
                <label
                  htmlFor="email"
                  className="text-primary-50 font-semibold"
                >
                  Email
                </label>
                <InputText
                  value={email}
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
              ></Button>
            </div>
          </div>
        </Card>
    </span>)
}
