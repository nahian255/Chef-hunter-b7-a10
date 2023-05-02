import React, { useContext, useState } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { newContext } from '../Contex/Auth';

const Login = () => {
    const { user, loginUser, loginWithGoogle } = useContext(newContext)
    let navigate = useNavigate();
    // console.log(user);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(email, password);


    // Login function.....
    const handleLogin = (event) => {
        event.preventDefault();
        if ((email, password)) {
            loginUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    // Sing-in with google...
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate("/");
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <h1>login page</h1>
            <div >
                <form className="flex flex-col gap-4 w-2/5 mx-auto my-9 border border-sky-500 p-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder=""
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            required={true}
                        />
                    </div>
                    <div className="flex items-center gap-2">

                        <Label htmlFor="remember">
                            If you not sing in befor please <Link to="/register"
                                className='text-blue-500'>Register here</Link>
                        </Label>
                    </div>
                    <Button
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </form>
                <div className='flex flex-wrap items-center gap-2 lg:mx-96'>
                    <div>
                        <Button
                            onClick={handleGoogleLogin}
                            outline={true}
                            gradientDuoTone="purpleToBlue"
                        >
                            Google Sing-in
                        </Button>
                    </div>
                    <div>
                        <Button
                            className='lg:mx-14'
                            outline={true}
                            gradientDuoTone="purpleToBlue"
                        >
                            GitHub Sing-in
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;