// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    // Kullanıcı yoksa login sayfasına yönlendir
    return <Navigate to="/login" replace />;
  }
  
  // Kullanıcı varsa çocuk bileşenleri (örneğin GameScreen) render et
  return children;
};

export default ProtectedRoute;