import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

const Kennel = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  };

  return (
    <>
    {/* NavBar component props: hasUser (variabe from state of Kennel) & clearUser (function from Kennel) */}
      <NavBar hasUser={hasUser} clearUser={clearUser}/>
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;






//TODO: Ask instructor team about 'class Kennel extends Component'
// import React, { Component } from "react"
// import NavBar from "./nav/NavBar"
// import ApplicationViews from "./ApplicationViews"

// import "./Kennel.css"

// class Kennel extends Component {
  
//   render() {
//     return (
//       <>
//         <NavBar />
//         <ApplicationViews />
//       </>
//     )
//   }
// }

// export default Kennel