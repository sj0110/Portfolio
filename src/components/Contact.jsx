import React from 'react'
import { useState } from 'react';
import {motion} from 'motion/react'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    const [charCount, setCharCount] = useState(0);
    const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setCharCount(value.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://getform.io/f/bpjjmlrb', formData);
      if (response.status === 200) {
        // setStatus('Message sent successfully!');
        // console.log('Success');
        setFormData({ name: '', email: '', message: '' });
        setCharCount(0); // Reset character count
      }
    } catch (error) {
    //   setStatus('Failed to send the message. Please try again.');
        console.error(error);
    }
  };

    return (
        <div
            id="contact"
            className="pt-20 md:pt-0 min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex justify-center items-center px-8 mb-8 lg:mb-0"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-screen-lg mx-auto flex flex-col gap-20"
            >
                <div className="flex flex-col gap-8">
                    <motion.h2
                        className="text-2xl text-white font-bold w-fit border-b-4 border-white sm:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Contact Me
                    </motion.h2>
                    <motion.p
                        className="text-gray-500 md:text-xl text-justify"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Submit the form below to get in touch with me and discuss, note that all the fields are
                        mandatory to be filled.
                    </motion.p>
                </div>
                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/bpjjmlrb"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2 gap-4 py-2 text-white"
                    >
                        <motion.input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 rounded-lg bg-transparent border-2 border-gray-600 focus:outline-none"
                            required
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        />

                        <motion.input
                            type="email"
                            name="email"
                            placeholder="Enter your email id"
                            className="p-2 rounded-lg bg-transparent border-2 border-gray-600 focus:outline-none"
                            required
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        />

                        <motion.textarea
                            name="message"
                            placeholder="Enter the message here"
                            className="p-2 h-60 rounded-lg bg-transparent border-2 border-gray-600 focus:outline-none resize-none overflow-y-auto"
                            required
                            maxLength="1000"
                            onChange={handleChange}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        />
                        <motion.p
                            className="text-gray-400"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {charCount}/1000 characters
                        </motion.p>

                        <motion.button
                            type="submit"
                            className="bg-gradient-to-r from-[#72C6EF] to-[#004E8F] text-white py-2 px-4 rounded hover:from-[#72C6EF] hover:via-[#72C6EF] hover:to-[#004E8F] focus:outline-none focus:ring focus:ring-blue-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact