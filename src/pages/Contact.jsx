import ScrollToTop from "../utils/ScrollToTop";
import React, { useState, useEffect } from 'react'
import { FaPaperPlane } from "react-icons/fa";
import toast from 'react-hot-toast'
import { CircularProgress } from '@mui/material';
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md"; 

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.raudratechnologies.com/contact/`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            subject,
            message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();
      console.log(json);

      if (json.message === "Email sent") {
        setEmail("");
        setMessage("");
        setSubject("");
        toast.success("Message sent successfully");
      } else {
        setError(json.error);
        toast.error("Message not sent");
      }
    } catch (error) {
      setError(error.message);
      toast.error("Message not sent");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="  font-main flex flex-col overflow-x-hidden max-w-screen md:flex-row gap-8  min-h-screen font-primary justify-center items-center px-4 my-20">
      <div className="  md:mt-0 md:my-0">
        <div className="text-zinc-800">
          <h2 className="text-3xl font-semibold ">
            Your feedback helps us improve
          </h2>
        </div>
        <div className="font-secondary">
          <div className="border-l-4 border-blue-600  py-1 px-2 my-8 ">
            <p className="text-xl font-semibold  pb-2">Contact Details</p>
            <p className=" text-black flex items-center gap-2 text-sm ">
              <MdEmail /> support@raudratechnologies.com
            </p>
            <p className="text-black flex items-start gap-2 text-sm">
              <CiLocationOn size={24} />
              99-A, Plot No:98-A, Sri Ram Nagar, Laxmi Nagar, Kondapur,
              Telangana 500084
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.9440107860064!2d78.3500691746846!3d17.462393700640927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b3f0000001%3A0x57dd07d512be374b!2sRaudra%20EduServices%20Pvt.Limited!5e0!3m2!1sen!2sin!4v1710615238946!5m2!1sen!2sin"
            className="my-4 rounded-xl  "
            style={{ border: "0", width: "100%", height: "300px" }}
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="signup  flex flex-col  
     justify-center  items-center  font-primary w-full "
        >
          <h2 className="text-3xl font-semibold my-4 text-transparent  bg-clip-text bg-gradient-to-b from-black to-zinc-800">
            Contact Us
          </h2>
          <div className="  rounded-lg w-full md:w-2/3 ">
            <div className="  h-full w-full items-center p-4  back md:p-8 rounded-lg flex flex-col justify-center">
              <div className="my-1 min-w-full">
                <input
                  type="email"
                  name="email"
                  className="block min-w-full py-2 placeholder:italic px-4 my-2 border-b border-zinc-900 focus:outline-none"
                  placeholder="your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required={true}
                />
              </div>

              <div className="my-1 min-w-full">
                <input
                  type="text"
                  className="block min-w-full py-2 placeholder:italic px-4 my-2 border-b border-zinc-900 focus:outline-none"
                  placeholder="Subject"
                  name="name"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  required={true}
                />
              </div>

              <div className="my-1 min-w-full">
                <textarea
                  type="textarea"
                  name="message"
                  className="block min-w-full  min-h-[200px] py-2 text-black placeholder:italic px-4 my-2 border-b border-zinc-900 focus:outline-none"
                  placeholder="Type your message..."
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required={true}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-zinc-900 hover:bg-zinc-950 text-white py-2 px-4 my-4 rounded-md flex items-center gap-2"
              >
                Send Message{" "}
                {isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <FaPaperPlane size={20} />
                )}{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Contact;
