import { useAuth0 } from "@auth0/auth0-react";
import React, { createContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();
  const [profileDetails, setProfileDatails] = useState();
  const [profileType, setProfileType] = useState("");
  console.log("user", user);

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };

  const handleLogout = () =>
    logout({ logoutParams: { returnTo: window.location.origin } });

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        handleLogin,
        handleLogout,
        profileDetails,
        setProfileDatails,
        profileType,
        setProfileType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
