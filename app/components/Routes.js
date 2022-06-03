import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import CreateAccount from './CreateAccount';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
