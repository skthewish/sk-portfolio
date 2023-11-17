import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.GATSBY_EMAILJS_SERVICE_ID,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Sukhdev Kanjariya',
          from_email: form.email,
          to_email: 'skisme4u@gmail.com',
          message: form.message
        },
        process.env.GATSBY_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <section id='contact' className='container w-full px-8 pt-[68px] flex items-center justify-center'>
      <div className='text-center flex flex-col items-center'>
        <h1 className='section-head-text'>Get in touch</h1>

        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className=' bg-black-100 py-8 md:p-8 rounded-2xl'>
          <form ref={formRef} onSubmit={handleSubmit} className='flex gap-4 max-w-5xl flex-col'>
            <div className='flex gap-4 flex-col sm:flex-row flex-wrap'>
              <label className='flex flex-col flex-1'>
                <span className='input-label'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className='input'
                />
              </label>
              <label className='flex flex-col flex-1'>
                <span className='input-label'>Your email</span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className='input'
                />
              </label>
            </div>
            <label className='flex flex-col flex-1'>
              <span className='input-label'>Your Message</span>
              <textarea
                rows={4}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='input'
              />
            </label>

            <button
              type='submit'
              className='bg-amber py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mx-auto'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
