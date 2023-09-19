import "server-only";

import { cookies } from "next/headers";

export const functionThatChecksAccessCookies = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("someCookie");

  return theme;
};
