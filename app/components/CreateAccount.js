import { useState } from 'react';
import { createUser } from '../redux/users';

function CreateAccount() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  console.log(formState);
  return (
    <div>
      <form class="pure-form">
        <fieldset>
          <legend>Create A New Account</legend>
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
          <label for="default-remember">
            <input type="checkbox" id="default-remember" /> Remember me
          </label>
          <button type="submit" class="pure-button pure-button-primary">
            Sign in
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default CreateAccount;
