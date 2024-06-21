import React, {useState} from 'react'
import { Container, TextField, Typography, Button } from "@mui/material";
import axios from 'axios'

const Login = () => {
  // set state
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  // Handle input field change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  // Handle submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3030/signup", formData).then(
      response => {
        console.log(response.data);
      }
    ).catch(error => {
      console.error('There is error', error);
    })
  }

  return (
    // main component
    <Container maxWidth="lg">
      <Typography variant='h4' component="h1" gutterBottom>
        Register form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
        label="firstname"
        name="firstname"
        value={FormData.firstname}
        onChange={handleChange}
        margin='normal'/>
        <TextField
        label="lastname"
        name="lastname"
        value={FormData.lastname}
        onChange={handleChange}
        margin='normal'/>
        <TextField
        label="email"
        name="email"
        value={FormData.email}
        onChange={handleChange}
        margin='normal'/>
        <TextField
        label="password"
        name="password"
        value={FormData.password}
        onChange={handleChange}
        margin='normal' />
        {/* <TextField
        label="Mobile number"
        name="Mobile number"
        value={FormData.Mobilenumber}
        onChange={handleChange}
        margin='normal' />
        <TextField
        label="Address"
        name="Address"
        value={FormData.Address}
        onChange={handleChange}
        margin='normal' /> */}
        <Button variant="contained" type='submit'>Contained</Button>
      </form>
    </Container>
  )
}

export default Login
