//to synch component with state
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//use selector is global state
import { Link, Outlet } from 'react-router-dom';
import { getMaps } from '../../redux/maps';

function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getMaps(token));
    }
  }, []);
  //empty second argument means it only synchs once

  const maps = useSelector((state) => state.maps);

  return (
    <div>
      <h1>Home</h1>
      <div className="maps-list">
        <ul>
          {maps.map((map) => (
            <li key={map.id}>
              <Link to={`/maps/${map.id}`}>{map.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {maps.length === 0 ? <div>Loading...</div> : <Outlet />}
    </div>
  );
}

export default Homepage;
