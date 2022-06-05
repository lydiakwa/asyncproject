import { useDispatch } from 'react-redux';

import { clearUser } from '../redux/user';

function Navbar() {
  const dispatch = useDispatch();

  return (
    <div>
      <nav>
        <Link className="link-button" to="/">
          Home
        </Link>
        <button type="button">Create a Map</button>
        <button
          type="button"
          onClick={() => {
            dispatch(clearUser());
            localStorage.removeItem('token');
          }}
        >
          Log out
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
