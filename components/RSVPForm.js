// components/RSVPForm.js
import { useState } from 'react';
import axios from 'axios';

export default function RSVPForm({ apiURL }) {
  const [formData, setFormData] = useState({ email: '', name: '', extras: '', invite_code: '' });
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertMessage('Just a sec! We are saving your details.');

    try {
      const response = await axios.post(apiURL, formData);
      if (response.data.result === 'error') {
        setAlertMessage(response.data.message);
      } else {
        setAlertMessage('');
        alert('RSVP saved!');
      }
    } catch (error) {
      console.error(error);
      setAlertMessage('Sorry! There is some issue with the server.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="extras">Husband/Wife or kids:</label>
        <input
          type="number"
          name="extras"
          id="extras"
          className="form-control"
          min="0"
          max="4"
          placeholder="Husband/Wife or kids"
          required
          value={formData.extras}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="invite_code">Invite code:</label>
        <input
          type="number"
          name="invite_code"
          id="invite_code"
          className="form-control"
          min="0"
          placeholder="Invite code"
          required
          value={formData.invite_code}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        {alertMessage && <div className="alert">{alertMessage}</div>}
      </div>
      <button type="submit" className="btn btn-primary">
        Yes, that's me!
      </button>
    </form>
  );
}
