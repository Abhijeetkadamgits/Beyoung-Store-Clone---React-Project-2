import React from 'react';
import {Navigate} from 'react-router-dom';
import Auth from './auth';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = Auth.isAuthenticated(); 
  return isAuthenticated ? (
   <div>{children}</div>
  ) : (
    <Navigate to="/login" replace />
  );
  
};

export default PrivateRoute;