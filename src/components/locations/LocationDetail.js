import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css';
import EmployeeManager from '../../modules/AnimalManager';
import EmployeeCard from '../employee/EmployeeCard';

const LocationDetail = props => {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.getWithEmployees(props.match.params.locationId)
      .then(APIResult => {
        setLocation(APIResult)
        setEmployees(APIResult.employees)
      });

        setIsLoading(false);
    }, []);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture> */}
        <h3>Location: <span style={{ color: 'darkslategrey' }}>{location.city}, {location.state}</span></h3>
        <p>Address: {location.address}</p>
        <h4>Employees:</h4>
        {employees.map(employee => 
          <EmployeeCard
            key={employee.id}
            employee={employee}
            {...props}
          />
          )}
        <button type="button" disabled={isLoading} onClick={handleDelete}>Close Location</button>
      </div>
    </div>
  );
}

export default LocationDetail;