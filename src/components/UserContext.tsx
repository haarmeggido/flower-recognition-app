import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface UserContextType {
  isLogged: boolean;
  login: (token: string) => void;
  logout: () => void;
  fetchUserData: () => Promise<any | null>;
  updateUserDetails: (userDetails: Partial<{ 
    email: string; 
    total_recognitions: number; 
    unique_recognitions: number; 
    flower_mask: number; 
  }>) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLogged(!!token);
  }, []);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setIsLogged(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLogged(false);
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not authenticated");
      }

      const response = await fetch("http://127.0.0.1:8080/user/get", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  const updateUserDetails = async (userDetails: Partial<{ 
    email: string; 
    total_recognitions: number; 
    unique_recognitions: number; 
    flower_mask: number; 
  }>) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("User not authenticated");
    }

    const mappedDetails = {
      ...(userDetails.email !== undefined && { email: userDetails.email }),
      ...(userDetails.total_recognitions !== undefined && { total_recognitions: userDetails.total_recognitions }),
      ...(userDetails.unique_recognitions !== undefined && { unique_recognitions: userDetails.unique_recognitions }),
      ...(userDetails.flower_mask !== undefined && { flower_mask: userDetails.flower_mask }),
    };

    const response = await fetch("http://127.0.0.1:8080/user/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(mappedDetails),
    });

    if (!response.ok) {
      throw new Error("Failed to update user details");
    }
  };

  return (
    <UserContext.Provider value={{ isLogged, login, logout, fetchUserData, updateUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
