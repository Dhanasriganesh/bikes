import React, { useState, useRef } from 'react';
import '../styles/UserDetailsForm.css';

function UserDetailsForm() {
  const [formData, setFormData] = useState({
    userName: '',
    mobileNumber: '',
    email: '',
    bikeName: '',
  });

  const [message, setMessage] = useState('');
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwWaVcz8F1Bi7ick0kwpud3T2jtGeBaO_D4L7y02xef_NFomzRfzmVYtF1J8dz8F8rZ/exec';
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        if (response.ok) {
          setMessage("Submitted successfully, You'll receive a call in a short time");
          setTimeout(() => {
            setMessage('');
          }, 5000);
          setFormData({
            userName: '',
            mobileNumber: '',
            email: '',
            bikeName: '',
          });
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch(error => {
        console.error('Error!', error.message);
        setMessage('There was an error submitting the form.');
      });
  };

  return (
    <>
      <div className="form-container">
        <h2>Book Your Bike</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="submit-to-google-sheet">
          <div className="form-group">
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="number"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bikeName">Bike Name:</label>
            <input
              type="text"
              id="bikeName"
              name="bikeName"
              value={formData.bikeName}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {message && <p id="msg">{message}</p>}
      </div>
    </>
  );
}

export default UserDetailsForm;
