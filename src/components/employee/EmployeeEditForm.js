import React, { useState, useEffect } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import "./EmployeeForm.css"

const EmployeeEditForm = props => {
    const [employee, setEmployee] = useState({name: "", job: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...employee };
        stateToChange[evt.target.id] = evt.target.value;
        setEmployee(stateToChange);
    };

    const updateExistingEmployee = evt => {
        evt.preventDefault()
        setIsLoading(true);
        ///get id in order to edit
        const editedEmployee = {
            id: props.match.params.employeeId,
            name: employee.name,
            job: employee.job
        };
        EmployeeManager.update(editedEmployee)
            .then(() => props.history.push("/employees"))
    }

    useEffect(() => {
        EmployeeManager.get(props.match.params.employeeId)
            .then(employee =>{
                setEmployee(employee);
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
                        id="name"
                        value={employee.name}
                    />
                    <label htmlFor="name">Employee name</label>

                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="job"
                        value={employee.job}
                    />
                    <label htmlFor="job">Job</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEmployee}
                            className="btn btn-primary"
                            >Submit</button>
                    </div>
            </fieldset>
        </form>
    </>
    );
}

export default EmployeeEditForm