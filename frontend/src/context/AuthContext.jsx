import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Save users to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const register = async (userData) => {
    // Check if user already exists
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      throw new Error('User already exists with this email');
    }

    // Create new user
    const newUser = {
      ...userData,
      id: Date.now(), // Simple way to generate unique id
      createdAt: new Date().toISOString()
    };

    setUsers(prevUsers => [...prevUsers, newUser]);
    setIsAuthenticated(true);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return newUser;
  };

  const login = async (email, password) => {
    // Find user
    const user = users.find(u => u.email === email);
    
    // Check if user exists
    if (!user) {
      throw new Error("Account not found. Please sign up to create an account.");
    }

    // Check if password matches
    if (user.password !== password) {
      throw new Error('Incorrect password. Please try again.');
    }

    setIsAuthenticated(true);
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      login, 
      logout,
      register,
      users 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 