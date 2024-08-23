import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Alert,
  AlertIcon,
  Box,
} from "@chakra-ui/react";
import "./register.css";

// Register component store user input
export const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    emailAddress: "",
    createPassword: "",
  });

  const [showAlert, setShowAlert] = useState(false); //State for alert

  //Create Referance for each input. Genellikle yeniden render edilmeden
  //inputlari saklamak icin kullanilir.

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailAddressRef = useRef();
  const createPasswordRef = useRef();

  const handleInputChange = (e) => {
    //triggered on every input field
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    //triggered when form submitted
    e.preventDefault();

    //check if all fields are filled
    const { firstname, lastname, emailAddress, createPassword } = formData;
    if (!firstname || !lastname || !emailAddress || !createPassword) {
      setShowAlert(true);

      if (!firstname && firstnameRef.current) {
        firstnameRef.current.focus();
    } else if (!lastname && lastnameRef.current) {
        lastnameRef.current.focus();
    } else if (!emailAddress && emailAddressRef.current) {
        emailAddressRef.current.focus();
    } else if (!createPassword && createPasswordRef.current) {
        createPasswordRef.current.focus();
    }
    
      return;
    }

    console.log("Form Data Submited:", formData);
    
    //Store the form data
    sessionStorage.setItem('userRegistrationData', JSON.stringify(formData));

    // Reset form data
    setFormData({
      firstname: "",
      lastname: "",
      emailAddress: "",
      createPassword: "",
    });

    navigate("/login");
  };

  const navigate = useNavigate();

  return (
    <div className="register">
      <Card className="card">
        <CardHeader className="cardHeader">
          <h1>Sign-up</h1>
        </CardHeader>
        <CardBody>
          {showAlert && (
            <Alert status="error" borderRadius="md" mb={4}>
              <AlertIcon />
              <p>
                All fields are required. Please fill out all fields before
                submitting.
              </p>
            </Alert>
          )}
          <form
            id="register-form"
            className="register-form"
            onSubmit={handleSubmit}
          >
            <Box mb={3}>
              <input
                ref={firstnameRef}
                name="firstname"
                className="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={3}>
              <input
                ref={lastnameRef}
                name="lastname"
                className="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={3}>
              <input
                ref={emailAddressRef}
                name="emailAddress"
                className="emailAddress"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
            </Box>
            <Box mb={3}>
              <input
                ref={createPasswordRef}
                type="password"
                name="createPassword"
                className="createPassword"
                placeholder="Create a Password"
                value={formData.createPassword}
                onChange={handleInputChange}
              />
            </Box>
          </form>
        </CardBody>
        <CardFooter>
          <Button
            colorScheme="teal"
            type="submit"
            form="register-form"
            className="submitButton"
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
