import React, { useRef } from "react";
import { FiMail } from "react-icons/fi";
import { BsMessenger } from "react-icons/bs";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5q87xbi",
        "template_5gpdejt",
        form.current,
        "bRI9Y7Ge6KXzbvWWS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>CONTACT ME</h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5">
        <div className="grid lg:grid-col-1 lg:grid-cols-1 grid-cols-1 my-0 mx-auto gap-5">
          <div className="contact_card">
            <FiMail />
            <h3>Email</h3>
            <h5>binhfrondendweb</h5>
            <h5>@gmail.com</h5>
            <a href="mailto:binhfrontendweb@gmail.com" target={"_blank"}>
              Send a messages
            </a>
          </div>
          <div className="contact_card">
            <BsMessenger />
            <h3>Messenger</h3>
            <h>Phan Binh</h>
            <a
              href="https://m.me/profile.php?id=100005753327465"
              target={"_blank"}
            >
              Send a messages
            </a>
          </div>
        </div>
        <div>
          <form className="space-y-3" ref={form} onSubmit={sendEmail}>
            <div>
              <input
                name="name"
                type={"text"}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={7}
                placeholder="Your messages"
                required
              />
            </div>
            <div className="text-end">
              <button href="#" type="submit" className="btn btn-primary">
                Send Messages
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
