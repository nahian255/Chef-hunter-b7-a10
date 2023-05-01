import React, { useContext, useState } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import { newContext } from '../Contex/Auth';

const Register = () => {

    const { registerUser } = useContext(newContext)

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleRegistration = (event) => {
        event.preventDefault();
        // if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        //     setError("password not valid need 8 char ");
        //     return;
        // }
        if ((name, email, password)) {
            registerUser(email, password)
                .then((result) => {
                    console.log(result.user);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } else {
            console.log('field emty');
        }
    };

    console.log(email, name, password, error);
    return (
        <div>
            <h1>register page</h1>
            <form className="flex flex-col gap-4 w-2/5 mx-auto my-9 border border-sky-500 p-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            // htmlFor="email1"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        onChange={(e) => setName(e.target.value)}
                        type="name"
                        placeholder="enter your name"
                        required={true}
                    />
                </div>
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
                        placeholder="enter your email"
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
                        placeholder='enter your password'
                        required={true}
                    />
                </div>
                <p><small>{error}</small></p>
                <div>
                    <div className="mb-2 block">
                        <Label

                            value="Your img-url"
                        />
                    </div>
                    <TextInput
                        placeholder='img-url'
                        type="password"
                        required={true}
                    />
                </div>

                {/* <div className="flex items-center gap-2">

                    <Label htmlFor="remember">
                        If you not sing in befor please <Link to="/register"
                            className='text-blue-500'>Register here</Link>
                    </Label>
                </div> */}
                <Button
                    onClick={handleRegistration}
                >
                    Register Now
                </Button>
            </form>
        </div>
    );
};

export default Register;