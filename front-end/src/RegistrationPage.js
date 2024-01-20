import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
    const [registrationData, setRegistrationData] = useState({
        username:'',
        password:''
    })
    const handleRegistrationChange = (e) => {
        const {name,value} = e.target;
        setRegistrationData((prevData) => ({
            ...prevData,
            [name]:value,
        }))
    }
    const handleRegistrationSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:8000/register",registrationData);
            console.log(response.data);
        }catch(e){
            console.log(e);
        }
        setRegistrationData({
            username:'',
            password:'',
        })
    }
  return (
    <div>
        <h1>Registration Form</h1>
        <form onSubmit={handleRegistrationSubmit}>
            <input type='text' name='username' value={registrationData.username} placeholder='Username' onChange={handleRegistrationChange} required/>
            <input type='password' name='password' value={registrationData.password} placeholder='Password' onChange={handleRegistrationChange} required/>
            <button type='submit'>Register</button>
            <p>Already Registered?
                <Link to = "/login">login here</Link>
            </p>
        </form>
    </div>
  )
}

export default RegistrationPage;