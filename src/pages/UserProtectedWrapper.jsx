import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
   const {user , setUser} = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
      const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setUser(response.data.captain);
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [token,navigate,setUser]);

  return <>{children}</>;
};

export default UserProtectedWrapper;
