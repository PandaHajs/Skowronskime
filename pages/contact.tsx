import Layout from "../lib/Layout";
import { FC, useState } from "react";
type ContactComponent = FC & { layout: typeof Layout };
import styles from "../styles/contact.module.scss";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const submit = () => {
    if (name && email && message) {
      if (email.match(regex) != null) {
        const serviceId = "service_usyedjh";
        const templateId = "template_ujbilsp";
        const publicKey = "z-KQDXk4LiMowhFGz";
        const templateParams = {
          name,
          email,
          message,
        };
        emailjs
          .send(serviceId, templateId, templateParams, publicKey)
          .then((response) => console.log(response))
          .then((error) => console.log(error));
        setName("");b  
        setEmail("");
        setMessage("");
        toast("Message sent!");
      } else {
        toast("Please enter a valid e-mail!");
      }
    } else {
      toast("Please fill in all areas!");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.part1}>
        <div className={styles.forma}>
          <p style={{ fontSize: "1.2rem" }}>
            You can contact me through:
            <br />
            <a
              style={{
                fontSize: "1.2rem",
                color: "red",
                textDecoration: "none",
              }}
              href="mailto:kacpermariaskowronski@protonmail.com"
            >
              E-mail
            </a>
            <br />
            <a
              style={{
                fontSize: "1.2rem",
                color: "red",
                textDecoration: "none",
              }}
              href="https://www.linkedin.com/in/kacper-skowro%C5%84ski-854424230/"
            >
              LinkedIn
            </a>
            <br />
            or fill in the contact form below:
          </p>
          <p style={{ fontSize: "1.2rem" }}>Your full name: </p>
          <input
            type="text"
            name="name"
            style={{ width: "30vw" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ fontSize: "1.2rem" }}>Your E-mail:</p>
          <input
            type="email"
            style={{ width: "30vw" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ fontSize: "1.2rem" }}>Message:</p>
          <textarea
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <br />
          <button onClick={submit} style={{ width: "60px" }}>
            Send
          </button>
        </div>
      </div>
      <div className={styles.part2}></div>
      <style jsx>{`
        textarea {
          width: 30vw;
          height: 10vh;
          max-width: 50vw;
          max-height: 20vh;
        }
      `}</style>
    </>
  );
};

Contact.layout = Layout;
export default Contact;
