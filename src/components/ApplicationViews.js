import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
// only include these once they are built - previous practice exercise
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './locations/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './locations/LocationForm'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import LocationEditForm from './locations/LocationEditForm'
import OwnerEditForm from './owner/OwnerEditForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

    // Check if credentials are in session storage returns true/false
    return (
      <React.Fragment>
        <Route path="/login" render={props => {
          return <Login setUser={setUser} {...props} />
        }} />
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        {/* //updated route: `/animals` */}
        <Route exact path="/animals" render={(props) => {
          if (hasUser) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route
          exact path="/animals/:animalId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            if (hasUser) {
              return (
                <AnimalDetail
                  animalId={parseInt(props.match.params.animalId)}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/login" />
            }
          }}
        />
        {/* // Our shiny new route. */}
        <Route path="/animals/new" render={(props) => {
          if (hasUser) {
            return <AnimalForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          if (hasUser) {
            return <AnimalEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/*
        This is a new route to handle a URL with the following pattern:
        http://localhost:3000/animals/1

        It will not handle the following URL because the `(\d+)`
        matches only numbers after the final slash in the URL
        http://localhost:3000/animals/jack
        */}
        <Route exact path="/locations" render={(props) => {
            return <LocationList {...props} />
        }} />
        <Route
          exact path="/locations/:locationId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent
            if (hasUser) {
              return (
                <LocationDetail
                  locationId={parseInt(props.match.params.locationId)}
                  employeeId={parseInt(props.match.params.employeeId)}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/login" />
            }
          }}
        />
        <Route path="/locations/new" render={(props) => {
          if (hasUser) {
            return <LocationForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/:locationId(\d+)/edit" render={props => {
          if (hasUser) {
            return <LocationEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employees" render={(props) => {
          if (hasUser) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/new" render={(props) => {
          if (hasUser) {
            return <EmployeeForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/:employeeId(\d+)/edit" render={props => {
          if (hasUser) {
            return <EmployeeEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />
        <Route exact path="/owners" render={(props) => {
          if (hasUser) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/new" render={(props) => {
          if (hasUser) {
            return <OwnerForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/:ownerId(\d+)/edit" render={props => {
          if (hasUser) {
            return <OwnerEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      </React.Fragment>
    )
  }


export default ApplicationViews