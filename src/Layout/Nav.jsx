import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { newContext } from '../Contex/Auth';

const Nav = () => {
    const { user, logOut } = useContext(newContext)
    // console.log(user);
    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>

            <div>
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center text-2xl ">
                        <span className='text-red-700'>Chef</span>Hub
                    </Link>

                    <div className=" w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 pr-4 pl-3  rounded md:bg-transparent  md:p-0 dark:"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Blog
                                </Link>
                            </li>
                            {
                                user ? <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                                    :
                                    <li>
                                        <Link
                                            to="/login"
                                            className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            Login
                                        </Link>
                                    </li>
                            }


                            {/* <li>
                                {user ? (
                                    <button onClick={() => signOut(auth)}>Logout</button>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="block py-2 pr-4 pl-3  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent"
                                    >
                                        Login
                                    </Link>
                                )}
                            </li>
                            <li>{user?.email}</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;