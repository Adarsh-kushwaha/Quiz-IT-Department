import React, { useState, createContext } from 'react';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {

const [authState, setAuthState] = useState({ token: null});
const setAuthInfo = ({token}) =>{
    setAuthState({token})
}

  return (
    <Provider
      value={{ 
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo)
      }}
    > 
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };