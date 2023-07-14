import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getCookie = (name: string): string => {
  return cookies.get(name);
};

export const setCookie = (name: string, value: unknown, maxAge: number) => {
  cookies.set(name, value, { path: "/", maxAge: maxAge });
};
