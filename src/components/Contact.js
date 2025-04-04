import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      
      <p className="text-lg mb-6">
        Have questions, feedback, or need support? We're here to help! Reach out to us via the following methods:
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="contact-info">
          <div className="mb-4">
            <p className="flex items-center mb-2">
              <span className="mr-2">📍</span>
              <span><strong>Address:</strong> Muffled Music HQ</span>
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-2">📞</span>
              <span><strong>Phone:</strong> +91 9999855239</span>
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-2">✉️</span>
              <span><strong>Email:</strong> support@muffledmusic.com</span>
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-2">💬</span>
              <span><strong>WhatsApp:</strong> Click the icon below to chat with us!</span>
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded h-32"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg">Let's connect and make your music experience better! 🎶</p>
      </div>
    </div>
  );
};

export default Contact; 