import React, { Component } from 'react';
import "./Location.css"

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        {/* picture */}
        <h3>Location: <span className="card-locationname">
          {props.location.city}, {props.location.state}
        </span></h3>
        <p>Address: {props.location.address}</p>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close Location</button>
      </div>
    </div>
  );
}

export default LocationCard;