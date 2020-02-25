import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ city: "", state: "", address: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          city: location.city,
          state: location.state,
          address: location.address
        });
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture> */}
        <h3>Location: <span style={{ color: 'darkslategrey' }}>{location.city}, {location.state}</span></h3>
        <p>Address: {location.address}</p>
      </div>
    </div>
  );
}

export default LocationDetail;