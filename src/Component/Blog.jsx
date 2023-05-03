import React from 'react';

const Blog = () => {
    return (
        <div>
            <header className='mt-8 mb-4 bg-red-200'>
                this is header part
            </header>
            <div className='bg-slate-100 p-2 mt-4 mb-4'>
                <h1 className='text-xl'>Tell us the differences between uncontrolled and controlled components ?</h1>
                <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. </p>
            </div>
            <div>
                <h1 className='text-xl'>How to validate React props using PropTypes?</h1>
                <p>
                    propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.
                </p>
            </div>
            <div className='bg-slate-100 p-2 mt-4 mb-4'>
                <h1 className='text-xl'>Tell us the difference between nodejs and express js?
                </h1>
                <p>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            </div>
            <div>
                <h1 className='text-xl'>What is a custom hook, and why will you create a custom hook?
                </h1>
                <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </div>
    );
};

export default Blog;