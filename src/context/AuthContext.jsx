import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
//prettier-ignore
import { loginUser, loginWithGoogle, logoutUser, registerUser } from "../firebase/firebase.auth";

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

  const register = async (name, email, password, photoURL) => {
    const user = await registerUser(name, email, password, photoURL);
    console.log(user);
  };

  const login = async (userEmail, password) => {
    const user = await loginUser(userEmail, password);
    // setUser(user);
    const { accessToken, displayName: name, email, photoURL } = user;
  };

  const googleLogin = async () => {
    const user = await loginWithGoogle();
    console.log(user);
    const { accessToken, displayName: name, email, photoURL } = user;
  };

  const logout = async () => {
    await logoutUser();
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
