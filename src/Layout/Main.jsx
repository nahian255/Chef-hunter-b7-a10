import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import Foooter from './Foooter';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Foooter></Foooter>
        </div>
    );
};

export default Main;