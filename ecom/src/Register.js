import React, {useState} from 'react'
import { Container, TextField, Typography, Button } from "@mui/material";
import axios from 'axios'

const Register = () => {
//   Handle state
  const [formData, setFormData] = useState({
    // emailId:"",
    password: ""
  });
// Hnadle Input field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    };
    // Handle submit form
  const handleSubmit = async(event) => {
    event.preventDefault();
    await axios.post(`http://localhost:3030/users/s11kartik2111087@gmail.com/login`, formData).then(
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
        Login form
      </Typography>
    <form onSubmit={handleSubmit}>
        {/* <TextField
        label="emailId"
        name="emailId"
        value={FormData.emailId}
        onChange={handleChange}
        margin='normal' /> */}
        <TextField
        label="password"
        name="password"
        value={FormData.password}
        onChange={handleChange}
        margin='normal' />
        <Button variant="contained" type='submit'>Contained</Button>
    </form>
    </Container>
  )
}

export default Register
