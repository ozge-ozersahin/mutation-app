import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Button, Alert, AlertIcon, Box } from '@chakra-ui/react';
import "./register.css";



// Register component store user input
export const Register = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        emailAddress: "",
        createPassword: ""
    });

    const [showAlert, setShowAlert] = useState(false); //State for alert 

    const handleInputChange = (e) => { //triggered on every input field
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (showAlert) {
            setShowAlert(false)
        }
    };


    const handleSubmit = (e) => { //triggered when form submitted
        e.preventDefault();

        //check if all fields are filled
        const { firstname, lastname, emailAddress, createPassword } = formData;
        if (!firstname || !lastname || !emailAddress || !createPassword) {
            setShowAlert(true);
            return;
        }
        console.log("Form Data Submited:", formData)

        setFormData({
            firstname: "",
            lastname: "",
            emailAddress: "",
            createPassword: "",
        });

    };

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/login")
    }

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
                                All fields are required. Please fill out all fields before submitting.
                            </p>
                        </Alert>
                    )}
                    <form id="register-form" className="register-form" onSubmit={handleSubmit}>
                        <Box mb={3}>
                            <input
                                name="firstname"
                                className="firstname"
                                placeholder="First Name"
                                value={formData.firstname}
                                onChange={handleInputChange}
                            />
                        </Box>
                        <Box mb={3}>
                            <input
                                name="lastname"
                                className="lastname"
                                placeholder="Last Name"
                                value={formData.lastname}
                                onChange={handleInputChange}
                            />
                        </Box>
                        <Box mb={3}>
                            <input
                                name="emailAddress"
                                className="emailAddress"
                                placeholder="Email Address"
                                value={formData.emailAddress}
                                onChange={handleInputChange}
                            />
                        </Box>
                        <Box mb={3}>
                            <input
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