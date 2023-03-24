// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";

// import { isEmail } from "validator";
// const required = value => {
//     if (!value) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           This field is required!
//         </div>
//       );
//     }
//   };
  
//   const email = value => {
//     if (!isEmail(value)) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           This is not a valid email.
//         </div>
//       );
//     }
//   };
  

//     return (

//       <Form
//         onSubmit={handleLogin}
//         ref={form}
//       >
    
//         <Input
//           type="text"
//           className="form-control"
      
//           validations={[required, email]}
//         />
  
//         <CheckButton
//           style={{ display: "none" }}
//           ref={checkBtn}
//         />
//       </Form>

//     );
  
import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;