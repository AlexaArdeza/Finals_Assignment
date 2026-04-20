import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// Module 4: High-Performance Form Interactions
type ContactValues = { sender: string; message: string };

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactValues>();
  const [modalData, setModalData] = useState<ContactValues | null>(null);

  const onSubmit: SubmitHandler<ContactValues> = (data) => {
    setModalData(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label style={{ fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>Sender Name</label>
          <input 
            {...register('sender', { required: 'Sender name is required' })} 
            placeholder="Enter your name"
          />
          {errors.sender && <span style={{ color: '#fb7185', fontSize: '0.8rem' }}>{errors.sender.message}</span>}
        </div>

        <div>
          <label style={{ fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>Message</label>
          <textarea 
            rows={5}
            {...register('message', { required: 'Message cannot be empty' })} 
            placeholder="Write your message here..."
          />
          {errors.message && <span style={{ color: '#fb7185', fontSize: '0.8rem' }}>{errors.message.message}</span>}
        </div>

        <button type="submit" className="btn-primary">Send Message</button>
      </form>

      {/* Assignment Finals_A3: Use a Modal instead of alert() */}
      {modalData && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 style={{ marginTop: 0 }}>Submission Success</h2>
            <div style={{ padding: '1rem 0', opacity: 0.9 }}>
              <p><strong>Sender:</strong> {modalData.sender}</p>
              <p><strong>Message:</strong></p>
              <p style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '8px', fontStyle: 'italic' }}>
                {modalData.message}
              </p>
            </div>
            <button className="btn-primary" onClick={() => setModalData(null)}>Dismiss</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
