// AuthContext.tsx
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { loginApi } from '../util/api.js'
import { jwtDecode } from 'jwt-decode';

interface AuthContextProps {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('token');
  });

  const login = async (username: string, password: string) => {
    try {
      const response = await loginApi(username, password);
      const authToken = response.data.token;
      setToken(authToken);

      localStorage.setItem('token', authToken);
    } catch (error : any ) {
      throw error;
    }
  };

  const logout = () => {
    setToken(null);

    localStorage.removeItem('token');
  };

  const isTokenExpired = () => {
    const token = localStorage.getItem('token');
    
    if (token) {
      const decodedToken = jwtDecode(token);
  
      return decodedToken.exp! < Date.now() / 1000;
    }
  
    return false;
  };

  useEffect(() => {
    if (token && isTokenExpired()) {
      logout();
    }
  }, [token]);

  const contextValue: AuthContextProps = {
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
