import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CreateAccount from './CreateAccount';
import Homepage from './Homepage';
import LoginPage from './LoginPage';
import Navbar from './Navbar';

import { checkUser } from '../redux/user';

const AppRoutes = () => {
  const user = useSelector((state) => {
    return state.user;
  });
  console.log('USER--', user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(checkUser(token));
    }
  }, []);

  if (user) {
    return (
      <Router>
        <Navbar />
        <Routes>
          {/* registered users pages */}
          <Route path="/" element={<Homepage />} />
          <Route path="/test" element={<div>hii</div>} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          {/* unregistered users pages */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </Router>
    );
  }
};

export default AppRoutes;
