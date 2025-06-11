// context/CaseContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CaseContext = createContext();

export const CaseProvider = ({ children }) => {
  const [cases, setCases] = useState([]);

  const addCase = (caseData) => {
    setCases((prev) => [...prev, caseData]);
  };

  return (
    <CaseContext.Provider value={{ cases, addCase }}>
      {children}
    </CaseContext.Provider>
  );
};

export const useCase = () => useContext(CaseContext);
