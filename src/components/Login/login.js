import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import "./login.css";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login">
            <h1 className="textLogin">Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    className="email"
                    placeholder='Enter your E-mail'
                    size='lg'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="passwordContainer">
                    <Input
                        className="passwordInput"
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button className="toggleButton" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </div>
                <Button type="submit" className="loginButton" mt={4}>Login</Button>
            </form>
            <a href="#"><p>Don't have an account? Register</p></a>
        </div>
    );
};
