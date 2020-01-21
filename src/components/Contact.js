import React, { Component } from 'react'
import Title from './Title';
import emailjs from 'emailjs-com';
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import 'jquery';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
          mailSent: false,
          errors: {
              name: '',
              email: '',
              message: ''
          }
        }
      }
    

      handleInputChange (event) {
        event.preventDefault();
            const target = event.target;
            const name = target.name;
            const value = target.value;

            this.setState({[name]: value});
      }

      validateMail () {
          let errors = {};
          let formIsValid = true;

          if (!this.state.name || this.state.name.length < 3) {
              errors.name = 'Minimum 3 symbols';
              formIsValid = false;
          }

          if (!this.state.email || this.state.email.length < 3) {
            errors.email = 'Minimum 3 symbols';
            formIsValid = false;
          }

          if (!this.state.message || this.state.message.length < 10) {
            errors.message = 'Minimum 10 symbols';
            formIsValid = false;
          }

          let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

          if (!pattern.test(this.state.email)) {
              errors.email = 'This is not a valid email';
              formIsValid = false;
          }

          this.setState({
              errors: errors
          })
          return formIsValid;
          
          
          

      }

      sentMessage (event) {
          event.preventDefault();

          if (!this.validateMail()) {
              return;
          }

          const templateParams = {
              from_name: this.state.name + '(' + this.state.email + ')',
              to_name: 'tobitascrochet@hotmail.com',
              subject: 'Contact from Tobitas Crochet Items',
              message_html: this.state.message 
          }

          emailjs.send('tobitascrochet', 'tobita', templateParams, 'user_mYxPKkv1KM2vc2kmswdjC')
            .then(response => {
                toastr.success('Message sent successfully');
                console.log('Success', response.status, response.text);
            }, error => {
                toastr.error(error);
                console.log(error);
            })

            this.setState({
                name: '',
                email: '',
                message: ''
            })
      }

    render() {

    return (
        <div className="py-5">
            <Title name="Contact" title="Tobita"/>
                <div className="Contact">
                    <div>
                    <form
                      id={this.props.id}
                      className={this.props.className}
                      name={this.props.name}
                      method={this.props.method}
                      action={this.props.action}
                    >
                        <label>Full Name</label>
                        <input type="text" className='form-control' name="name" placeholder="Your name.." 
                        required='required'
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.name}
                        error={this.state.errors.name}
                        /><span className="is-error">{this.state.errors.name}</span><br></br>
                      
                        <label>Email</label>
                        <input type="email" className='form-control' name="email" placeholder="Your email"
                        required='required'
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.email}
                        error={this.state.errors.email}
                        /><span className="is-error">{this.state.errors.email}</span><br></br>

                        <label>Message</label>
                        <textarea type="text" className='form-control' name="message" placeholder="Write something.." rows='7'
                        required='required'
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.message}
                        error={this.state.errors.message}
                        ></textarea>
                        <span className="is-error">{this.state.errors.message}</span><br></br><br></br>
                        
                        <input type="submit" 
                        onClick={this.sentMessage.bind(this)} value="Submit" />
                        
                        
                    </form>
                    </div>
                </div>
        </div>
    )
  }
}

export default Contact;

