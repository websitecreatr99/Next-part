// import { TextField, Button, Box, Alert, Typography, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es';
// import { NavLink, useNavigate } from 'react-router-dom';
import { setUserToken } from '../../features/authSlice';
import { getToken, storeToken } from '../../services/LocalStorageService';
import { useLoginUserMutation } from '../../services/userAuthApi';
import Image from 'next/image';
import Link from 'next/link';
// import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
// import ContactImg from '../public/assets/contact.jpg'

const UserLogin = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation()
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    const res = await loginUser(actualData)
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      // console.log(typeof (res.data))
      // console.log(res.data)
      storeToken(res.data.token)
      let { access_token } = getToken()
      dispatch(setUserToken({ access_token: access_token }))
      navigate('/dashboard')
    }
  }
  let { access_token } = getToken()
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }))
  }, [access_token, dispatch])


//   return <>


//     <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
      
//       <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />

//       {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
//       <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />

//       <Box textAlign='center'>
//         {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>}
//       </Box>
//       <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
//       {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
//     </Box>
//   </>;
// };

// export default UserLogin;



// const Contact = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const data = {name, phone, email, subject, message};

//     fetch('http://localhost:3000/api/postcontact', {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(response => response.text())
//       .then(data => {
//         alert("Thanks for contacting us");
//         setEmail('')
//         setPassword('')
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });

//   }

//   const handleChange = (e) => {
//     if (e.target.name == 'email') {
//       setEmail(e.target.value)
//     }
//     else if (e.target.name == 'password') {
//       setPassword(e.target.value)
//     }
//   }

  return (
    <div id='contact' className='w-full h-500'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full pt-[140px] '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4 mt-5'>Get In Touch</h2>
        <div className='col-span-3 w-full h-[750px] shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                onSubmit={handleSubmit}
                // action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                // method='POST'
              >
                {/* <div className='grid md:grid-cols-2 gap-4 w-full py-2'> */}
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='email'
                      name='email'
                      value={email}
                      // onChange = {handleChange}
                    />
        {server_error.name ? <h2 style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.name[0]}</h2> : ""}
                  </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Password</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='password'
                    name='password'
                    value={password}
                    // onChange = {handleChange}
                  />
       {server_error.email ? <h2 style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</h2> : ""}
                </div> 
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
);
};

export default UserLogin;