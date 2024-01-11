// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import "../CSScomponents/loginpageCSS.css";

// const Loginpage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isChecked, setIsChecked] = useState(false);
//   const [formError, setFormError] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!username || !password || !isChecked) {
//       setFormError("Please fill in all fields and check the box.");
//       return;
//     }

//     // Check if the entered username and password match the expected values
//     if (username !== 'kminchelle' || password !== '0lelplR') {
//       setFormError("Invalid username or password.");
//       return;
//     }

//     try {
//       const response = await fetch("https://dummyjson.com/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: username,
//           password: password,
//         }),
//       });

//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error during authentication:", error);
//     }
//   };

//   return (
//     <>
//       <Form className="Form" onSubmit={handleSubmit}>
//         <h1 className="heading-login">Login</h1>
//         {formError && <p className="error-message">{formError}</p>}
//         <Form.Group className="mb-3" controlId="formBasicUsername">
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check
//             type="checkbox"
//             label="Check me out"
//             checked={isChecked}
//             onChange={(e) => setIsChecked(e.target.checked)}
//           />
//         </Form.Group>
//         <Form.Text className="text-muted">
//           Create your account <Link to="/signup">here</Link>
//         </Form.Text>
//         <Button variant="primary" type="submit">
//           <Link className="btn-text" to="/homepage">
//             Login
//           </Link>
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default Loginpage;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../CSScomponents/loginpageCSS.css';

const Loginpage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password || !isChecked) {
      setFormError('Please fill in all fields and check the box.');
      return;
    }

    if (username !== 'kminchelle' || password !== '0lelplR') {
      setFormError('Invalid username or password.');
      return;
    }

    try {
            const response = await fetch("https://dummyjson.com/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: username,
                password: password,
              }),
            });
      
            const data = await response.json();
            console.log(data);
      navigate('/homepage');
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <>
      <Form className="Form" onSubmit={handleSubmit}>
        <h1 className="heading-login">Login</h1>
        {formError && <p className="error-message">{formError}</p>}
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </Form.Group>
        <Form.Text className="text-muted">
          Create your account <Link to="/signup">here</Link>
        </Form.Text>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Loginpage;
