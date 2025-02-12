import React, { useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { login } from "../../utils/auth/local";
import { GoogleLogin } from "./googleLogin";
import { Card } from "primereact/card";

import "./auth.css";

export const CreateAccountCard = () => {
  const navigate = useNavigate();
  const [given_name, setGivenName] = useState("");
  const [family_name, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const header = (
    <p style={{ fontSize: "10pt" }}>
      By clicking "Sign up" you agree to our{" "}
      <a href="" style={{ color: "#0078d4" }}>
        terms of service
      </a>{" "}
      and acknowledge you have read our{" "}
      <a href="" style={{ color: "#0078d4" }}>
        privacy policy
      </a>
      .
    </p>
  );

  const footer = (
    <span className="flex flex-col pt-4 items-center justify-center border-t-1 border-gray-300">
      <GoogleLogin text="Sign up with Google" />
    </span>
  );

  const create = async () => {
    const data = {
      given_name: given_name,
      family_name: family_name,
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/user/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const error = await login(email, password);

        if (error === null) {
          navigate("/");
        }
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkSubmitKeyPress = async (event) => {
    if (event.key === "Enter") {
      await create();
    }
  };

  return (
    <span className="authCard">
      <Card title="Create your account" subTitle={header} footer={footer}>
        <div className="flex flex-col gap-6">
          <div className="inline-flex flex-col gap-2">
            <FloatLabel>
              <label
                htmlFor="givenName"
                className="text-primary-50 font-semibold"
              >
                First Name
              </label>
              <InputText
                value={given_name}
                onChange={(e) => setGivenName(e.target.value)}
                id="givenName"
                className="w-full"
                onKeyUp={checkSubmitKeyPress}
              ></InputText>
            </FloatLabel>
          </div>
          <div className="inline-flex flex-col gap-2">
            <FloatLabel>
              <label
                htmlFor="familyName"
                className="text-primary-50 font-semibold"
              >
                Last Name
              </label>
              <InputText
                value={family_name}
                onChange={(e) => setFamilyName(e.target.value)}
                id="familyName"
                className="w-full"
                onKeyUp={checkSubmitKeyPress}
              ></InputText>
            </FloatLabel>
          </div>
          <div className="inline-flex flex-col gap-2">
            <FloatLabel>
              <label htmlFor="email" className="text-primary-50 font-semibold">
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
              label="Sign up"
              className="w-full"
              onClick={create}
            ></Button>
          </div>
        </div>
      </Card>
    </span>
  );
};
