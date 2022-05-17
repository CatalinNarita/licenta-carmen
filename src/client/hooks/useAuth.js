import { useState, useEffect } from "react";

export const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    async function checkToken() {
      try {
        const res = await fetch("http://localhost:5001/checkToken", {
          method: "GET",
          credentials: "include",
        });
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

    checkToken();
  }, []);

  return { loading, redirect };
};
