import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // const [loading, setLoading] = useState(false);

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
    console.log(e);
  };

  return (
    <section id='contact' className='container min-h-screen w-full px-8 pt-[68px] flex items-center justify-center'>
      <div className='text-center flex flex-col items-center'>
        <h4 className='section-sub-text'>Get in touch</h4>
        <h1 className='section-head-text'>Contact</h1>

        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <label className='flex flex-col'>
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
            <label className='flex flex-col'>
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
            <label className='flex flex-col'>
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
              {false ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
