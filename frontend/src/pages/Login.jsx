import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/contextApi'
const Login = () => {
    const {setUser, user} = useContext(Context);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/user/signin', formData);
            console.log(res);
            setUser(res.data);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-6 md:w-1/3 w-2/3 mx-auto mt-[20%] md:mt-[10%]'>
                <h1 className='text-3xl mx-auto font-bold'>Log In</h1>
                <input id='email' className='border-2 rounded-sm' type="email" placeholder='Email' onChange={handleChange} />
                <input id='password' className='border-2 rounded-sm' type="password" placeholder='Password' onChange={handleChange} />
                <button type="submit" className='bg-blue-600 text-white p-2 rounded-sm'>Log In</button>
            </div>
        </form>
  )
}

export default Login