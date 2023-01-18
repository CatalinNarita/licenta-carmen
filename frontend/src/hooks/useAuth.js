import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

export const useAuth = () => {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function checkToken() {
      try {
        const res = await fetch("http://localhost:5001/token", {
          method: "GET",
          credentials: "include",
        });
        const responseBody = await res.json();
        const decoded = jwt_decode(responseBody.accessToken);
        setToken(responseBody.accessToken);
        setFirstName(decoded.firstName);
        setLastName(decoded.lastName);
        setUserId(decoded.id);
        if (res.status === 200) {
          setLoading(false);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        setLoading(false);
        setRedirect(true);
      }
    }

    console.log(token);
    !token && checkToken();
  }, [token]);

  return { token, userId, firstName, lastName, loading, redirect };
};
