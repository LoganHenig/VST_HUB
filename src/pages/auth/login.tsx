import { useNavigate } from "react-router-dom";

import { LoginCard } from "../../components/auth/loginCard";
import { GoogleLogin } from "../../components/auth/googleLogin";
import { Button } from "primereact/button";

export const Login = () => {
  const navigate = useNavigate();

  const login_google = async () => {
    const res = await fetch("http://localhost:8108/auth/google/login/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch(data.url);
    console.log(res2.json());
    // window.dispatchEvent(new Event("login"));
  };

  return (
    <>
      <div className="flex flex-col gap-4 m-auto mt-15 items-center justify-center">
        <i
          className="pi pi-objects-column"
          style={{
            fontSize: "2.5rem",
            color: "var(--color-vst-blue-400)",
          }}
          onClick={() => navigate("/")}
        ></i>
        <span className="flex flex-col gap-4 w-100">
          <LoginCard />
          <GoogleLogin />
        </span>
      </div>
    </>
  );
};
