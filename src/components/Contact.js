import React from 'react'
import Title from './Title';
import Form from 'react-bootstrap/Form';
import { ButtonContainer } from './Button';
import ReactDOM from 'react-dom';


export default function Contact() {

    const [validated, setValidated] = React.useState(false);
  
    const handleSubmit = event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    const getSelectValue = () => {
        /* Here's the key solution */
        console.log(ReactDOM.findDOMNode(this.controlId).value)
    }

    return (
        <div className="py-5">
            <Title name="Contact" title="Tobita"/>
            <Form className="row-cols-2 mx-auto py-5 was-validated" action="mail.php" method="POST" id="contact-form" 
            noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group id="name" controlId="name" className="mx-auto justify-content-center">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" placeholder="Your Name" />
                    <Form.Control.Feedback type="invalid">Please enter a valid name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group id="email" controlId="email" className="mx-auto justify-content-center">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="name@example.com"/>
                    <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group id="message" controlId="message" className="mx-auto justify-content-center">
                    <Form.Label>Message</Form.Label>
                    <Form.Control required as="textarea" rows="7" />
                    <Form.Control.Feedback type="invalid">Please enter a message!</Form.Control.Feedback>
                </Form.Group>
                <Form.Row className="mx-auto justify-content-center">
                    <Form.Group className="mt-5">
                        <Form.Check required label="I am not a robot!" feedback="You must check before submitting."/>
                    </Form.Group>
                </Form.Row>
            
            <ButtonContainer type="submit" className="row m-auto" onclick={getSelectValue}>
                    <span className="mr-2">
                        <i className="far fa-envelope" />                        
                    </span>
                    Send
            </ButtonContainer></Form>                    
        </div>
    )
}


