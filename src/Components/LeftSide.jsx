import React from 'react'
import {Form , Button}from 'react-bootstrap';

const LeftSide = () => {
  return (
     
    <div>
       <br />
      <br />
      <br />
      <Form style={{width:"50%", marginLeft:"10%", marginTop:"10%"}}>
      <Form.Group>
          <Form.Label>Enter Your Username</Form.Label>
          <Form.Control type='text' placeholder='Enter Your Username'    />
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control type='email' placeholder='Enter Your Email'    />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Enter Your Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Your Password'    />
        </Form.Group>
        <Button type = "submit">Submit </Button>
      </Form>
    </div>  
  )
}

export default LeftSide;