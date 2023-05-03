import React, { useContext, useState } from 'react';
import { newContext } from '../Contex/Auth';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const Private = ({ children }) => {
    const { user, loading } = useContext(newContext)
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <div>
            <Spinner aria-label="Default status example" />

        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ comming: location }} replace></Navigate>;
};

export default Private;