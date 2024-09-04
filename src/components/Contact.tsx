import React, { useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { Turret_Road } from "next/font/google";

export const turret = Turret_Road({
    weight: "800",
    subsets: ["latin"],
});

const ContactAndVenue = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', mobileNumber: '', email: '', message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post('/api/sendmail', formData);
      toast.success('Email sent successfully!');
      setFormData({ firstName: '', lastName: '', mobileNumber: '', email: '', message: '' });
    } catch (err) {
      toast.error('Failed to send email. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-24 p-4 sm:p-6 flex flex-col md:flex-row gap-8 backdrop-blur-sm w-11/12 mx-auto">
      <Toaster />
      <div className="md:w-1/2">
        <h1 className={`text-2xl text-center md:text-5xl font-bold  font-bold text-primary-heading mb-4`}>
          Contact Us
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="flex-1 p-2 border rounded text-white bg-white/20 hover:bg-white/30"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="flex-1 p-2 border rounded text-white bg-white/20 hover:bg-white/30"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="tel"
            name="mobileNumber"
            className="w-full p-2 border rounded text-white bg-white/20 hover:bg-white/30"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded text-white bg-white/20 hover:bg-white/30"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Explain in under 100 words"
            className="w-full p-2 border rounded h-24 resize-none text-white bg-white/20 hover:bg-white/30"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
      
      <div className="w-[90vw] md:w-1/2">
        <h1 className={`text-2xl text-center md:text-5xl font-bold text-primary-heading mb-4`}>
          Venue
        </h1>

        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.878086061607!2d75.80101577530141!3d22.621027331193673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f958dcb7169d%3A0xd877c12078e50f0f!2sMedi-Caps%20University!5e0!3m2!1sen!2sin!4v1725134963459!5m2!1sen!2sin" 
          className='opacity-60 hover:opacity-80 h-64 w-full rounded-lg mb-4 max-w-[300px] ml-3 md:max-w-[400px] md:mx-auto' 
          loading="lazy"
        ></iframe>

        <h2 className='text-center text-sm md:text-2xl opacity-80'>
          Medi-Caps University (Indore)
        </h2>
      </div>
    </div>
  );
};

export default ContactAndVenue;
