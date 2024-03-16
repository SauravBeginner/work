import { useEffect, useState } from "react";

const useToken = () => {
  const [token, setToken] = useState(null);

  const fetchToken = () => {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
      try {
        const userToken = JSON.parse(tokenString);
        setToken(userToken.token);
        console.log(userToken);
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    }
  };

  useEffect(() => {
    fetchToken;
  }, []);

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));

    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
};
export default useToken;
