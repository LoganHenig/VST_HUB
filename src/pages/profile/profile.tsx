import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";

import {
  fetchActiveAccount,
  fetchAuthenticatedUser,
  logout,
} from "../../utils/auth";

export function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);

  const _logout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      setUser(await fetchAuthenticatedUser());
      setAccount(await fetchActiveAccount());
    };

    fetchUserInfo();
  }, [navigate]);

  return (
    <div className="flex flex-col gap-2 justify-center align-center m-auto p-10">
      <pre>User: {JSON.stringify(user, null, 2)}</pre>
      <pre>Account: {JSON.stringify(account, null, 2)}</pre>
      <Button
        className="w-50"
        label="Logout"
        icon="pi pi-sign-out"
        onClick={_logout}
      />
    </div>
  );
}
