"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ title = true }) => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactData({ ...contactData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: contactData.name,
      to_name: "Faisal Zaman",
      message: contactData.message,
      subject: contactData.subject,
      from_email: "zfaisal863@gmail.com",
    };
    emailjs
      .send(
        "service_x0zn3wn",
        "template_o0hzly8",
        templateParams,
        "Sw0kuKQOGmEUzH6Pm"
      )
      .then(
        (result) => {
          setContactData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          toast.success(
            "We have recived your email you will be contacted shortly!"
          );
        },
        (error) => {
          toast.success("There is some Problem try again!");
          setContactData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      );
  };

  return (
    <div
      className={` ${
        title &&
        "bg-[url(../../public/hero.jpg)] h-auto bg-no-repeat bg-cover bg-center"
      } flex flex-col justify-center pl-[2rem] text-[#000a2d] py-[10px]`}
    >
      {title && <h1>Contact Us</h1>}
      <h4> Get in Touch</h4>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 ">
                <textarea
                  type="text"
                  name="message"
                  required
                  className="w-[100%] border-2 h-[200px] px-[15px] py-[6px]"
                  placeholder="Enter Message"
                  value={contactData.message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-1 ">
                <input
                  name="name"
                  type="text"
                  required
                  className="w-[100%] px-[18px] py-[6px] h-[48px] border-2"
                  placeholder="Enter your Name"
                  onChange={handleInputChange}
                  value={contactData.name}
                />
              </div>
              <div className="col-span-1">
                <input
                  name="email"
                  required
                  type="email"
                  className="w-[100%] px-[18px] py-[6px] h-[48px] border-2"
                  placeholder="Email"
                  onChange={handleInputChange}
                  value={contactData.email}
                />
              </div>

              <div className="col-span-2">
                <input
                  name="subject"
                  type="text"
                  required
                  className="w-[100%] px-[18px] py-[6px] h-[48px] col-span-2 border-2"
                  placeholder="Enter Subject"
                  onChange={handleInputChange}
                  value={contactData.subject}
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="border-2 border-[#ec5b53] px-[44px] py-[18px] text-[#ec5b53]"
                >
                  <p>S E N D</p>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-20">
            <div className="flex space-x-2">
              <img src="./Home.svg" />
              <div>
                <span className="text-[#2a2a2a]">Buttonwood, California.</span>
                <span className="text-[#8a8a8a]">Rosemead, CA 91770</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <img src="./mobile.svg" />
              <div>
                <span className="text-[#2a2a2a]">+1 253 565 2365.</span>
                <span className="text-[#8a8a8a]">Mon to Fri 9am to 6pm</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <img src="./mail.svg" />
              <div>
                <span className="text-[#2a2a2a]">support@colorlib.com.</span>
                <span className="text-[#8a8a8a]">
                  Send us your query anytime!
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
