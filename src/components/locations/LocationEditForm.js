import React, { useState, useEffect } from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"

const LocationEditForm = props => {
  const [kennelLocation, setKennelLocation] = useState({ city: "", state: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...kennelLocation };
    stateToChange[evt.target.id] = evt.target.value;
    setKennelLocation(stateToChange);
  };

  const updateExistingLocation = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedLocation = {
      id: props.match.params.locationId,
      city: kennelLocation.city,
      state: kennelLocation.state,
      address: kennelLocation.address
    };

    LocationManager.update(editedLocation)
      .then(() => props.history.push("/locations"))
  }

  useEffect(() => {
    LocationManager.get(props.match.params.locationId)
      .then(kennelLocation => {
        setKennelLocation(kennelLocation);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="city"
              value={kennelLocation.city}
            />
            <label htmlFor="city">City</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="state"
              value={kennelLocation.state}
            />
            <label htmlFor="state">State</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={kennelLocation.address}
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingLocation}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default LocationEditForm