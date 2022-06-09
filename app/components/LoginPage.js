import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUser } from '../redux/user';

function LoginPage() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUser(formState, navigate)); //get auth
  };

  return (
    <div className="form">
      <h2>Welcome to MapQuest!</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <fieldset>
          <input
            name="email"
            value={formState.email}
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            value={formState.password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="default-remember">
            <input type="checkbox" id="default-remember" /> Remember me
          </label>
          <button type="submit" className="pure-button pure-button-primary">
            Login
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginPage;
