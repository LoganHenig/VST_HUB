import { useNavigate } from "react-router-dom";

import { CreateAccountCard } from "../../components/auth/createAccountCard";


export const Signup = () => {
  const navigate = useNavigate();

  return (<>
    <div className="flex flex-col gap-4 m-auto mt-4 items-center justify-center">
        <i
            className="pi pi-objects-column"
            style={{
                fontSize: "2.5rem",
                color: "var(--color-vst-blue-400)",
            }}
            onClick={() => navigate('/')}
            ></i>
        <span className="flex flex-col gap-4 w-100">
            <CreateAccountCard />
        </span>
    </div>
  </>);
};
