import axios from 'axios';
import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');

const LoginPage = () => {

    const [loginData, setLoginData] = useState({

        username:'',
        password:''
    });
    //handle login submit 
    const handleLoginSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8000/login',loginData);
            const {success,message} = response.data;
            if(success){
                console.log("login successful");
            }else {
                console.log(message);
            }
        }
        catch(e){
            console.error("Login Error",e);
        }
        setLoginData({
            username:'',
            password:''
        })
    }
    const handleLoginChange = (e) => {
        // console.log(e);
        const {name,value} = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]:value,
        }))
    }
  return (
    <>
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleLoginSubmit}>
            <input type='text' name='username'placeholder='Username' value={loginData.username} onChange={handleLoginChange}/>
            <input type='password' name='password'placeholder='Password'value={loginData.password} onChange={handleLoginChange}/>
            <button type='submit'>Login</button>
            <p>Not Registered Yet?
                <Link to = '/register'>Register Here</Link>
            </p>
        </form>
    </div>
    </>
  )
}

export default LoginPage;
