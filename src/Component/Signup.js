import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './LoginSignup.css'

export const Form = () => {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    date: '',
    time: ''
  });
  // console.log(fields.gender,'jhvhgvuhvu')
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fields.firstName) {
      alert("Enter your first name")
    }
    if (!fields.lastName) {
      alert("Enter your last name")
    }
    if (!fields.date) {
      alert("Enter your dob")
    }
    if (!fields.email) {
      alert("Enter your email")
    }
    if (!fields.password) {
      alert("Enter your password")
    }
    if (!fields.mobile && fields.mobile.length < 10) {
      alert("Enter your 10 digit mobile number")
    }
    

    const data = {
      "firstName": fields.firstName,
      "lastName": fields.lastName,
      "date": fields.date,
      "email": fields.email,
      "password": fields.password,
      "mobile": fields.mobile,
      "time": fields.time
    }
    try {
      const req = await fetch("http://localhost:3005/signup", {
        method: "post",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const response = await req.json();
      alert("signup Successfully")
      setFields({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        password: '',
        date: '',
        time: ''
      });
      if (!req.ok) {
        throw new Error('Network response was not ok');
      }
    }
    catch (error) {
      console.error();
    }
  }
  const handleReset = (e) => {
    setFields({
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      password: '',
      date: '',
      time: ''
    });

  }
  return (
    <div className="main-container2">
      <div className="container">
        <h1>FORM</h1>
        <hr />
        <label > Name :</label>
        <input className='w-150' style={{ marginLeft: "12px" }} name="firstName" value={fields.firstName} onChange={(e) => handleInputChange(e)} type="text" placeholder='Enter First Name' />
        <input className='w-150' type="text" placeholder='Enter Last Name' name="lastName" value={fields.lastName} onChange={(e) => handleInputChange(e)} /><br />
        <label >Mobile :</label>
        <input className='w-335' style={{ marginLeft: "6px" }} name="mobile" value={fields.mobile} onChange={(e) => handleInputChange(e)} type="number" placeholder='Enter Mobile Number' /><br />
        <label>Email  Id :</label>
        <input className='w-335' name="email" value={fields.email} onChange={(e) => handleInputChange(e)} type="email" placeholder='Enter Email' /><br />
        <label >Password :</label>
        <input className='w-335' name="password" value={fields.password} onChange={(e) => handleInputChange(e)} type="password" placeholder='Enter Password' /><br />
        <label style={{ marginRight: "22px" }} >Date :</label>
        <input className='w-100' name="date" value={fields.date} onChange={(e) => handleInputChange(e)} type="date" />
        <label >Time :</label>
        <input className='w-100' name="time" value={fields.time} onChange={(e) => handleInputChange(e)} type="time" /><br />
        <hr />
        
        <button onClick={handleSubmit} > SUBMIT </button>
        <button onClick={handleReset}> RESET </button>
        <p className='center'> <h3>Already have a Account?  <Link to='/Login'  >Login Here</Link></h3> </p>
       </div>
    
    </div>
  )
}


export default Form;



// 6283812695 front end hiring 