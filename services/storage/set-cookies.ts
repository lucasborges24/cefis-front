import Cookies from "js-cookie";

export function setCookies(key: string, value: string, expiresHours = 1) {
  Cookies.set(key, value, {
    expires: expiresHours / 24,
  });
}
