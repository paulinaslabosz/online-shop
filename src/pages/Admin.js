import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
const permission = true;

function Admin() {
  return (
    <Routes>
      <Route
        exact
        path='/'
        element={
          permission ? (
            <p>You are on admin panel site.</p>
          ) : (
            <Navigate replace to='/login' />
          )
        }
      />
    </Routes>
  );
}

export default Admin;
