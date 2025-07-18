import { createContext, useState } from "react";

export const UserDataContext = createContext();;
export default  function UserContext({children}) {
 
  const [user, setUser] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
  });
  return (
    <div>
      <UserDataContext.Provider value={{user}}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
} 