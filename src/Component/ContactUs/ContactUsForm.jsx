import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';

const ContactUsForm = () => {
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value
    };

    console.log('Form Data:', formData);

    try {
      const response = await fetch(
        'https://e-commerce-contact-us-d91fb-default-rtdb.firebaseio.com/contactus.json',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Firebase Response:', data);

      // Clear input fields after successful submission
      name.current.value = '';
      email.current.value = '';
      phone.current.value = '';

      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: 'gray',
          color: 'white',
          textAlign: 'center',
          padding: '40px 0'
        }}
      >
        <h1 style={{ fontSize: '90px', fontWeight: 'bold' }}>Contact Us</h1>
        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>
          We would love to hear from you!
        </p>
        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>
          Please fill out the form below:
        </p>
      </div>
      <div className="container" style={{ marginTop: '30px' }}>
        <form onSubmit={formSubmitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              ref={name}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Id:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              ref={email}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No.:</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              ref={phone}
              required
            />
          </div>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default ContactUsForm;
