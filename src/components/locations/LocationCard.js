import React, { Component } from 'react';
import "./Location.css"
import { Link } from 'react-router-dom';

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        {/* picture */}
        <h3>Location: <span className="card-locationname">
          {props.kennelLocation.city}, {props.kennelLocation.state}
        </span></h3>
        <p>Address: {props.kennelLocation.address}</p>
        <Link to={`/locations/${props.kennelLocation.id}`}>
          <button>Details</button>
        </Link>
        <button type="button"
          onClick={() =>  props.history.push(`/locations/${props.kennelLocation.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteLocation(props.kennelLocation.id)}>Close Location</button>
      </div>
    </div>
  );
}

export default LocationCard;