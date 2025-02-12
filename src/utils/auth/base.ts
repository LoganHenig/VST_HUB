import { User, Account, Token } from "../../context/authContext";

export interface FetchResponse {
  data: object | null;
  error: string | null;
}

export interface AccountResponse {
  data: Account | null;
  error: string | null;
}

export async function fetchAccount(
  access_token: string,
  provider: string = "vst-realm"
): Promise<AccountResponse> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/auth/account/?provider=${provider}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${access_token}`,
        },
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
      error:
        (await response.json()?.detail) ||
        "An error occurred. Please try again later.",
    };
  } catch {
    return {
      data: null,
      error: "An error occurred. Please try again later.",
    };
  }
}

export async function fetchUser(access_token: string): Promise<FetchResponse> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/auth/user/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
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
      error:
        (await response.json()?.detail) ||
        "An error occurred. Please try again later.",
    };
  } catch {
    return {
      data: null,
      error: "An error occurred. Please try again later.",
    };
  }
}
