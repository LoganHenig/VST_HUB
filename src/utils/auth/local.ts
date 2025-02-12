import { FetchResponse } from "./base";
import { Token } from "../../context/authContext";

interface LoginResponse {
  data: Token | null;
  error: string | null;
}

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  const formDetails = new URLSearchParams();
  formDetails.append("username", email);
  formDetails.append("password", password);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/auth/local/login/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDetails,
      }
    );

    if (response.ok) {
      return {
        data: await response.json(),
        error: null,
      };
    }

    return {
      data: null,
      error: (await response.json()?.detail) || "Authentication failed.",
    };
  } catch {
    return {
      data: null,
      error: "An error occurred. Please try again later.",
    };
  }
}
