import React, { useState, useEffect } from 'react'
import { FaPaperPlane } from "react-icons/fa";
import toast from 'react-hot-toast'
import { CircularProgress } from '@mui/material';
const Contact = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
        const response = await fetch(`https://api.raudratechnologies.com/contact/`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                subject,
                message,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const json = await response.json();
        console.log(json);

        if (json.message === 'Email sent') {
            setEmail('');
            setMessage('');
            setSubject('');
            toast.success('Message sent successfully');
        } else {
            setError(json.error);
            toast.error('Message not sent');
        }
    } catch (error) {
        setError(error.message);
        toast.error('Message not sent');
    } finally {
        setIsLoading(false);
    }
};


  return (
    <div className='  font-main flex flex-col overflow-x-hidden max-w-screen md:flex-row gap-8  min-h-screen font-primary justify-center items-center px-4 my-20'>

      <div className='text-white  md:mt-0 md:my-0'>
        <h2 className='text-3xl md:text-5xl font-semibold my-4 text-transparent  bg-clip-text bg-gradient-to-b from-black to-zinc-800'>
        Your feedback <br /> helps us improve 
        </h2>
        <div className='text-zinc-800'>
        <p>We are here to help you and we'd love to connect with you.</p>

        <p>We'll get back in 24h.</p>
        </div>
        
        
      </div>

      <div className='w-full md:w-1/2'>
      <form
      onSubmit={handleSubmit}
       className='signup  flex flex-col  
       justify-center  items-center text-black  font-primary w-full ' >
         <h2 className='text-3xl font-semibold my-4 text-transparent  bg-clip-text bg-gradient-to-b from-black to-zinc-800'>Contact Us</h2>
        <div className=' border  rounded-lg w-full md:w-2/3 shadow-xl'>

        <div className=' bg-white border border-zinc-500 backdrop-filter backdrop-blur-xl h-full w-full items-center p-4  back md:p-8 rounded-lg flex flex-col justify-center'>
        
        
        
        
        <div 
        className='flex md:gap-4 flex-col  items-center min-w-full'>

       

        <div className='my-1 min-w-full'>
        <label>Email</label>
        <input type="email"
        name="email"
        className='block min-w-full py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg bg-'
        placeholder='abc@gmail.com'
        onChange={(e)=>setEmail(e.target.value)} 
        value={email}
        required={true}
        />
        </div>

        <div className='my-1 min-w-full'>
        <label>Subject</label>
        <input type="text"
        className='block min-w-full py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg '
        placeholder='Subject...'
        name="name"
        onChange={(e)=>setSubject(e.target.value)} 
        value={subject}
        required={true}
        />
        </div>

        <div className='my-1 min-w-full'>
        <label>Message</label>
        <textarea type="textarea"
        name="message"
        className='block min-w-full  min-h-[200px] py-2 text-black placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg bg-'
        placeholder='Type your message...'
        onChange={(e)=>setMessage(e.target.value)} 
        value={message}
        required={true}
        />
        </div>
        <button type="submit" disabled={isLoading} className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center gap-2'>Send Message {isLoading ? <CircularProgress size={20} color='inherit'/> : <FaPaperPlane size={20}/>} </button>
        </div>


       

        

      

      
        </div>

        </div>
    </form>
      </div>

    </div>
  )
}

export default Contact