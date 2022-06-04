import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postUser } from '../redux/users';

function CreateAccount() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postUser(formState));
  };

  console.log(formState);
  return (
    <div className="form">
      <form className="create-account-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Create a New Account</legend>
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
            Sign in
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default CreateAccount;
