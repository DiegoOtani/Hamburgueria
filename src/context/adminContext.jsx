import { createContext, useState, useContext, useEffect } from "react";
import { UserContext } from "./userContext";

export const AdminContext = createContext();

export const AdminProvider = ({children}) => {
  const { user } = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if(user && user.email && user.email.includes('@admin')) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  return (
    <AdminContext.Provider value={ {isAdmin, setIsAdmin} }>
      {children}
    </AdminContext.Provider>
  )
}