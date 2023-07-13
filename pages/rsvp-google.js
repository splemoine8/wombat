import { useState } from 'react';
import Head from 'next/head';
import $ from 'jquery';
import Layout, { siteTitle } from '../components/layout';

export default function RSVP() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    extras: 0,
    invite_code: '',
  });

  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setAlertMessage("Just a sec! We are saving your details.");
  
    // Replace the URL below with your Google Apps Script URL
    const googleAppsScriptURL =
      "https://script.google.com/macros/s/AKfycbyAfO0b-eNjty_y3f0I87zTvQFySRprLFf_sA-yIjC1YrWhyOQoy5z-dpl1qf_MpwkFUQ/exec";
  
      fetch("/api/submitForm", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.result === "error") {
          setAlertMessage(data.message);
        } else {
          setAlertMessage("Successfully submitted!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setAlertMessage("Sorry! There is some issue with the server.");
      });
  };
  
  
  
  

  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle} - RSVP</title>
        </Head>
        <div>
          <h2>RSVP</h2>
          <form id="rsvp-form" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="number"
                name="extras"
                placeholder="Husband/Wife or kids"
                min="0"
                max="4"
                value={formData.extras}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="number"
                name="invite_code"
                placeholder="Invite code"
                min="0"
                value={formData.invite_code}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              {alertMessage && <p>{alertMessage}</p>}
            </div>
            <button type="submit">Yes, that's me!</button>
          </form>
        </div>
      </Layout>
    </>
  );
}
