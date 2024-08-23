import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./login.css";
import logo from "../../images/brand-logo.png";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const navigate = useNavigate();

    const userRegistrationData = JSON.parse(sessionStorage.getItem('userRegistrationData'));

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        if (email === "admin" && password === "admintest") { navigate("/user"); } 
        else if (userRegistrationData && email === userRegistrationData.emailAddress && password === userRegistrationData.createPassword) {navigate("/user");}
        else {
            alert("Invalid email or password");
        }
    };

    const handleRegisterClick = () => {
        navigate("/register");
    };



    return (
        <div className="login">
            <img src={logo} alt="Logo" className="logo"></img>
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
                    <div className="inputWrapper">
                        <Input
                            className="passwordInput"
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button className="toggleButton" onClick={handleClick}>
                            {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </Button>
                    </div>
                </div>
                <Button type="submit" className="loginButton" mt={4}>Login</Button>
            </form>
            <a href="register" onClick={handleRegisterClick}><p>Don't have an account? Register</p></a>
        </div>
    );
};
