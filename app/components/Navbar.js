import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearUser } from '../redux/user';

function Navbar() {
  const dispatch = useDispatch();

  return (
    <div>
      <nav>
        <Link className="link-button" to="/">
          Home
        </Link>
        <Link className="link-button" to="/maps/create">
          Create a Map
        </Link>
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
