import React, { useState } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({ name: "", job: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewEmployee = evt => {
    evt.preventDefault();
    if (employee.name === "" || employee.job === "") {
      window.alert("Please input an employee's name and job title.");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      EmployeeManager.post(employee)
        .then(() => props.history.push("/employees"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Employee name"
            />
            <label htmlFor="employeeName">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="job"
              placeholder="Job"
            />
            <label htmlFor="job">Job</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm