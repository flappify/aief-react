import React from 'react';
import {Form,Button} from 'react-bootstrap';
class SignIn extends React.Component{
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render()
    {
        return(
            <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" id="email" placeholder="Enter email" onChange={this.handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" id="password" placeholder="Password" onChange={this.handleChange} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        )
    }
}

export default SignIn;