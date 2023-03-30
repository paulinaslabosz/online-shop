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
            <p>Jesteś na stronie admina</p>
          ) : (
            <Navigate replace to='/login' />
          )
        }
      />
    </Routes>
  );
}

export default Admin;
