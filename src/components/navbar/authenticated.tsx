import React, { useRef } from "react";

import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Avatar } from "primereact/avatar";
import { useNavigate } from "react-router";

export const AuthenticatedContent = ({ user, account }) => {
  const navigate = useNavigate();
  const menu = useRef(null);

  const initials = () => {
    return `${user?.given_name.charAt(0)}${user?.family_name.charAt(0)}`.toUpperCase();
  };

  const items: MenuItem[] = [
    {
      template: () => {
        return (
          <button
            onClick={() => navigate("/profile")}
            className="w-full p-link flex align-items-center p-2 pl-4 text-color hover:bg-gray-200 border-noround"
          >
            {account?.image ? (
              <Avatar image={account.image} className="mr-2" shape="circle" />
            ) : (
              <Avatar label={initials()} className="mr-2" shape="circle" />
            )}
            <span className="font-bold text-center align-center m-auto ml-1">
              {user?.given_name} {user?.family_name}
            </span>
          </button>
        );
      },
    },
    {
      separator: true,
    },
    {
      label: "Messages",
      icon: "pi pi-inbox",
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      // command: () => _logout(),
    },
  ];

  return (
    <>
      <Menu model={items} popup ref={menu} id="pofile_menu" />

      {account?.image ? (
        <Avatar
          image={account.image}
          shape="circle"
          size="large"
          className="m-auto"
          onClick={(event) => menu.current.toggle(event)}
          aria-controls="pofile_menu"
          aria-haspopup
        />
      ) : (
        <Avatar
          label={initials()}
          shape="circle"
          size="large"
          className="m-auto"
          onClick={(event) => menu.current.toggle(event)}
          aria-controls="pofile_menu"
          aria-haspopup
        />
      )}
    </>
  );
};
