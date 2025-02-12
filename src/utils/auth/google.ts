import { FetchResponse } from "./base";

export async function login(): Promise<FetchResponse> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/auth/google/login/`
    );

    if (!response.ok) {
      return {
        data: null,
        error: (await response.json()) || "Authentication failed.",
      };
    }

    const data = await response.json();
    window.open(data.url, "_self");
  } catch (exc) {
    return {
      data: null,
      error: exc.message,
    };
  }
}
