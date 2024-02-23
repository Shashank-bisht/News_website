import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/user/signup', formData);
            console.log(res);
            navigate('/sign-in');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-6 md:w-1/3 w-2/3 mx-auto mt-[20%] md:mt-[10%]'>
                <h1 className='text-3xl mx-auto font-bold'>Sign Up</h1>
                <input id='username' className='border-2 rounded-sm' type="text" placeholder='Username' onChange={handleChange} />
                <input id='email' className='border-2 rounded-sm' type="email" placeholder='Email' onChange={handleChange} />
                <input id='password' className='border-2 rounded-sm' type="password" placeholder='Password' onChange={handleChange} />
                <button type="submit" className='bg-blue-600 text-white p-2 rounded-sm'>Sign Up</button>
            <span className='text-gray-500 mx-auto'>Already have an account? <a href='/sign-in' className='text-blue-600'>Sign In</a></span>
            </div>
        </form>
    );
};

export default Signup;
