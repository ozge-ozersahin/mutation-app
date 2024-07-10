import React, { useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import "./login.css";

export const Login = () => {
    // Parola görünürlüğünü yönetmek için durum değişkeni
    const [show, setShow] = useState(false);

    // Şifre görünürlüğünü değiştirme işlevi
    const handleClick = () => setShow(!show);

    return (
        <div className="login">
            <h1 className="textLogin">Login</h1>
            <Input className="email" placeholder='Enter your E-mail' size='lg' />
            <InputGroup className="password" size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                />
                <InputRightElement className="show" width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <a href="#"> <p> Don't have an account? Register </p></a>
        </div>
    );
};
