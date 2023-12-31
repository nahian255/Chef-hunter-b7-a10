import React, { useContext, useState } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { newContext } from '../Contex/Auth';

const Login = () => {
    const { user, loginUser, loginWithGoogle, loginWithGithub } = useContext(newContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    console.log(user);
    const location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.comming?.pathname || "/";

    // Login function.....
    const handleLogin = (event) => {
        event.preventDefault();
        setError('')
        if ((email, password)) {
            loginUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    navigate(from, { replace: true });
                })
                .catch((error) => {
                    setError('email and password not match')
                });
        }
    };

    // Sing-in with google...
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorMessage = error.message;
            });
    };

    // Sing-in with gitHub...
    const handleGitHubLogin = () => {
        loginWithGithub()
            .then((result) => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div>
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
                    <p className='text-xs text-red-600'>{error}</p>
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
                            onClick={handleGitHubLogin}
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