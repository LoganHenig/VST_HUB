export const login = async (email: string, password: string) => {
  const formDetails = new URLSearchParams();
  formDetails.append("username", email);
  formDetails.append("password", password);

  try {
    const response = await fetch("http://localhost:8108/auth/local/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formDetails,
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.access_token);
      window.dispatchEvent(new Event("login"));

      return null;
    }

    const errorData = await response.json();
    return errorData.detail || "Authentication failed!";
  } catch {
    return "An error occurred. Please try again later.";
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
  window.dispatchEvent(new Event("logout"));
};

export const fetchActiveAccount = async (provider: string = "vst-realm") => {
  const access_token = localStorage.getItem("token");
  if (access_token == null) {
    console.log("An error occurred. Please try again later.");
  }

  try {
    const response = await fetch(
      `http://localhost:8108/auth/account/?provider=${provider}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (response.ok) {
      return await response.json();
    }

    const errorData = await response.json();
    console.log(
      errorData.detail || "An error occurred. Please try again later."
    );
  } catch {
    console.log("An error occurred. Please try again later.");
  }
};

export const fetchAuthenticatedUser = async () => {
  const access_token = localStorage.getItem("token");
  if (access_token == null) {
    console.log("An error occurred. Please try again later.");
  }

  try {
    const response = await fetch("http://localhost:8108/auth/user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.ok) {
      return await response.json();
    }

    const errorData = await response.json();
    console.log(
      errorData.detail || "An error occurred. Please try again later."
    );
  } catch {
    console.log("An error occurred. Please try again later.");
  }
};
