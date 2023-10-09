import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Typography } from '@mui/material';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../services/userAuthApi'
import { storeToken } from '../services/LocalStorageService';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
// import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
// import ContactImg from '../public/assets/contact.jpg'

const Registration = () => {
  const [server_error, setServerError] = useState({})
  // const navigate = useNavigate();
  const router = useRouter();
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password2: data.get('password2'),
      tc: data.get('tc'),
    }
    const res = await registerUser(actualData)
    if (res.error) {
      console.log(typeof (res.error.data.errors))
      console.log(res.error)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      storeToken(res.data.token)
      router.push('/dashboard')
    }
  }
//   return <>

//     <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
//       <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
//       {server_error.name ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.name[0]}</Typography> : ""}
//       <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
//       {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
//       <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
//       {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
//       <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' />
//       {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
//       <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
//       {server_error.tc ? <span style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.tc[0]}</span> : ""}
//       <Box textAlign='center'>
//         <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
//       </Box>
//       {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
//     </Box>
//   </>;
// };

// export default Registration;





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
//         setName('')
//         setPhone('')
//         setEmail('')
//         setSubject('')
//         setMessage('')
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });

//   }

//   const handleChange = (e) => {
//     if (e.target.name == 'name') {
//       setName(e.target.value)
//     }
//     else if (e.target.name == 'phone') {
//       setPhone(e.target.value)
//     }
//     else if (e.target.name == 'email') {
//       setEmail(e.target.value)
//     }
//     else if (e.target.name == 'subject') {
//       setSubject(e.target.value)
//     }
//     else if (e.target.name == 'message') {
//       setMessage(e.target.value)
//     }
//   }

  return (
    <div id='registration' className='w-full h-500'>
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
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      // value={name}
                      // onChange = {handleChange}
                    />
        {server_error.name ? <h2 style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.name[0]}</h2> : ""}
                  </div>
                  {/* <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                      value={phone}
                      onChange = {handleChange}
                    />
        {server_error.email ? <h2 style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</h2> : ""}
                  </div>
                </div> */}
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    // value={email}
                    // onChange = {handleChange}
                  />
       {server_error.email ? <h2 style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</h2> : ""}
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Password</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='password'
                    name='password'
                    // value={password}
                    // onChange = {handleChange}
                  />
      {server_error.email ? <h2 style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</h2> : ""}
                </div>
                <div className='flex flex-col py-2 h-[200px]'>
                  <label className='uppercase text-sm py-2'>Conform Password</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='password'
                    name='password2'
                    // value={password2}
                    // onChange = {handleChange}
                  />
                </div>
                <div className="form-group form-check">
        <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
        {server_error.tc ? <span style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.tc[0]}</span> : ""}
                        {/* <input name="acceptTerms" type="checkbox" id="acceptTerms"/>
                        <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label> */}
                    </div>
                <button className='w-full p-4 text-black-100 mt-4'>
                  Send Message
                </button>
   {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
              </form>
            </div>
          </div>
        </div>
      </div>

);
};

export default Registration;