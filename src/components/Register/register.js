import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import "./register.css";

export const Register = () => {
    return (
        <div className="register">
            <Card className="card">
                <CardHeader className="cardHeader">
                    <h1>Sign-up</h1>
                </CardHeader>
                <CardBody>
                    <input className="firstname" placeholder="First Name"></input>
                    <input className="lastname" placeholder="Last Name"></input>
                    <input className="emailAddress" placeholder="Email address"></input>
                    <input className="createPassword" placeholder="Create a Password"></input>
                </CardBody>
            </Card>
        </div>
    )
}