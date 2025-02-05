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
      localStorage.setItem("user_id", data?.user?._id);
      window.dispatchEvent(new Event("login"));
      return null;
    } else {
      const errorData = await response.json();
      return errorData.detail || "Authentication failed!";
    }
  } catch {
    return "An error occurred. Please try again later.";
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
};
