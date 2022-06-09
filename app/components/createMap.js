import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { postMap } from '../redux/maps';

function CreateMap() {
  const [formState, setFormState] = useState({
    title: '',
    lat: '',
    long: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  //you will want to redirect to the EDIT map component here
  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    dispatch(postMap(formState, token, navigate));
  };

  return (
    <div className="form">
      <h2>Create a new map</h2>
      <form className="pure-form pure-form-aligned" onSubmit={handleSubmit}>
        <fieldset>
          <div className="pure-control-group">
            <label htmlFor="aligned-title">Title</label>
            <input
              type="text"
              id="aligned-title"
              placeholder="Title"
              name="title"
              value={formState.title}
              onChange={handleChange}
            />
            <span className="pure-form-message-inline">
              This is a required field.
            </span>
          </div>
          <div className="pure-control-group">
            <label htmlFor="aligned-latitude">Latitude</label>
            <input
              type="number"
              id="aligned-latitude"
              placeholder="Latitude"
              name="lat"
              value={formState.lat}
              onChange={handleChange}
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="aligned-longitude">Longitude</label>
            <input
              type="number"
              id="aligned-longitude"
              placeholder="Longitude"
              name="long"
              value={formState.long}
              onChange={handleChange}
            />
          </div>

          <div className="pure-controls">
            <button type="submit" className="pure-button pure-button-primary">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default CreateMap;
