"use client";
import React from "react";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const YourFormComponent = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: "Aqib",
      to_name: "khan",
      message: "This is message ",
      subject: "this is subjects",
      from_email: "zfaisal863@gmail.com",
    };
    emailjs
      .send(
        "service_umrukee",
        "template_1dhfhuq",
        templateParams,
        "WFosOxokDGk26D2IT"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Clear the form after submission if needed
    e.target.reset();
  };

  const notify = () =>
    toast.success("We have recived your email you will be contacted shortly!");

  return (
    // <form onSubmit={sendEmail}>
    //   <input />
    <>
      <button onClick={notify}>Notify!</button>
    </>
  );
};

export default YourFormComponent;
