import React, { Component } from 'react';
import "./Owner.css"

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        {/* picture */}
        <h3>Name: <span className="card-ownername">
          {props.owner.name}
        </span></h3>
        <p>Phone Number: {props.owner.phoneNumber}</p>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove Client</button>
      </div>
    </div>
  );
}

export default OwnerCard;