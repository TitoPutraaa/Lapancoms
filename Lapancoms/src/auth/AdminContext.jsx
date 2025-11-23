import { createContext } from "react";

export const AdminContext = createContext({
  token: null,
  setToken: () => {},
  admin: null,
});
