import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { newContext } from '../Contex/Auth';
import { Avatar } from 'flowbite-react';

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
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => (isActive ? ' text-blue-500' : 'text-black')}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) => (isActive ? ' text-blue-500' : 'text-black')}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                {
                                    user
                                        ?
                                        <li>
                                            <div className="flex flex-wrap gap-1  ">
                                                <li> <button onClick={handleLogout}>Logout</button></li>
                                                <Avatar
                                                    className=''
                                                    title={user.displayName}
                                                    img={user.photoURL
                                                    }
                                                    rounded={true}
                                                />
                                            </div>
                                        </li>
                                        :
                                        <li>
                                            < NavLink
                                                to="/login"
                                                className={({ isActive }) => (isActive ? ' text-blue-500 my-2' : 'text-black')}
                                            >
                                                Login
                                            </NavLink>
                                        </li>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;