import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { bounceUp, zoomIn } from '../utils/motion';
import emailjs from '@emailjs/browser';
import { socialLinks } from '../constants';
import useTheme from '../utils/useTheme';

const Contact = () => {
  const formRef = useRef();
  const { theme } = useTheme();
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
    const { name, email, message } = form;

    if (!name || !email || !message) {
      return alert('Please fill up all the details');
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      return alert('Please enter valid email');
    }
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
      <div className='text-center flex flex-col items-center w-full'>
        <motion.div initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.6 }}>
          <motion.h1 variants={zoomIn(0, 1)} className='section-head-text'>
            Get in touch
          </motion.h1>
        </motion.div>

        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.3 }}
          className='py-8 md:p-8 w-full'
        >
          <motion.form
            variants={zoomIn(0, 1)}
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex gap-4 max-w-4xl flex-col mx-auto'
          >
            <div className='flex gap-4 flex-col sm:flex-row flex-wrap'>
              <label className='flex flex-col flex-1'>
                <span className='input-label'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className='input w-full'
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
                  className='input flex-1'
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
          </motion.form>
        </motion.div>

        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}
          className='py-8 md:p-8'
        >
          <div className='flex gap-10'>
            {socialLinks.map((item) => (
              <a href={item.link} target='_blank' rel='noopener noreferrer' key={item.id}>
                <motion.div variants={bounceUp(50, 0, 0.4, 1)}>
                  {item.id === 'github' ? (
                    <img
                      src={theme === 'light' ? item.icon : item.darkThemeIcon}
                      alt={item.id}
                      key={item.id}
                      className='h-10 md:h-[60px]'
                      loading="lazy"
                    />
                  ) : (
                    <img src={item.icon} alt={item.id} key={item.id} className='h-10 md:h-[60px]' loading="lazy" />
                  )}
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
