import { useNavigate } from "react-router-dom";

import { LoginCard } from "../../components/auth/loginCard";
import { GoogleLogin } from "../../components/auth/googleLogin";


export const Login = () => {
  const navigate = useNavigate();

  return (<>
    <div className="flex flex-col gap-4 m-auto my-30 items-center justify-center">
        <i
            className="pi pi-objects-column"
            style={{
                fontSize: "2.5rem",
                color: "var(--color-vst-blue-400)",
            }}
            onClick={() => navigate('/')}
            ></i>
        <span className="flex flex-col gap-4 w-100">
            <LoginCard />
            <GoogleLogin />
        </span>
    </div>
  </>);
};
