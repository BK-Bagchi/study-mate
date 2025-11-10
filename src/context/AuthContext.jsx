import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
//prettier-ignore
import { loginUser, loginWithGoogle, logoutUser, registerUser } from "../firebase/firebase.auth";
import { AuthAPI } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const issueJWTToken = async (accessToken) => {
    try {
      const res = await AuthAPI.issueToken({ accessToken });
      return res.data.token;
    } catch (error) {
      console.error(error);
    }
  };
  const register = async (name, email, password, photoURL) => {
    const user = await registerUser(name, email, password, photoURL);
    console.log(user);
  };

  const login = async (userEmail, password) => {
    const user = await loginUser(userEmail, password);
    const { accessToken, displayName: name, email, photoURL } = user;
    const token = await issueJWTToken(accessToken);
    localStorage.setItem("token", token);
    setUser({ name, email, photoURL });
  };

  const googleLogin = async () => {
    const user = await loginWithGoogle();
    const { accessToken, displayName: name, email, photoURL } = user;
    const token = await issueJWTToken(accessToken);
    localStorage.setItem("token", token);
    setUser({ name, email, photoURL });
  };

  const logout = async () => {
    await logoutUser();
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, register, login, googleLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
