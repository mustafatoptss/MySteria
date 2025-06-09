// src/context/UserContext.jsx

import React, { createContext, useContext, useState } from 'react';

// 1. Context oluşturuluyor
const UserContext = createContext();

// 2. Provider bileşeni tanımlanıyor
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Custom Hook tanımı
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
