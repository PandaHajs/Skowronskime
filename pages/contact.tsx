import Layout from "../lib/Layout";
import { FC } from "react";
type ContactComponent = FC & { layout: typeof Layout };

const Contact: ContactComponent = () => {
  return (
    <>
      <div className="part1">
        <h1>Here I&apos;ll put a contact form</h1>
        <p>At some point...</p>
      </div>
      <div className="part2"></div>
      <style jsx>{`
        p:first-of-type {
          font-style: italic;
          opacity: 0.5;
        }
        .part1 {
          height: 50vh;
          padding: 0 20vw;
          padding-top: 15vh;
        }
        .part2 {
          background-color: var(--main2);
          height: 50vh;
          clip-path: polygon(0% 14%, 100% 0px, 100% 100%, 0px 100%);
        }
      `}</style>
    </>
  );
};

Contact.layout = Layout;
export default Contact;
