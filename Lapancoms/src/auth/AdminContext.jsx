import { createContext } from "react";

export const AdminContext = createContext({
  token: null,
  admin: null,
});
