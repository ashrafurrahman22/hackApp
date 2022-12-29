import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-xl font-semibold'>404!</h2>
            <h2 className='font-semibold'>Not Available Right Now!</h2>
            <Link to="/"><button className='btn btn-primary w-44 my-4 text-xs'>Back To Login</button></Link>
        </div>
    );
};

export default Error;