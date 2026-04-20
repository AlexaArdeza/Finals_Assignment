import React from 'react';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent (A1 Placeholder)');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label style={{ fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>Sender Name</label>
        <input 
          type="text"
          placeholder="Enter your name"
          required
        />
      </div>

      <div>
        <label style={{ fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>Message</label>
        <textarea 
          rows={5}
          placeholder="Write your message here..."
          required
        />
      </div>

      <button type="submit" className="btn-primary">Send Message</button>
    </form>
  );
};

export default ContactForm;
