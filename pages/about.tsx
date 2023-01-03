import Layout from "../lib/Layout";
import { getAge } from "../lib/age";
import { FC } from "react";
type AboutComponent = FC & { layout: typeof Layout };

const About: AboutComponent = () => {
  const age = getAge();
  return (
    <>
      <h1>Who am I?</h1>
      <p>
        I was born on [REDACTED] in [REDACTED], I&apos;m {age} currently years
        old and living in Poznan, Poland. At this point in time I have only
        primary education and finished more than half of my High School. I have
        the CISCO ITE 5.0 certificate and I&apos;m undergoing the CISCO CCNA1
        course. I&apos;m not yet sure what I want to do in life, but I&apos;m
        certain it will either be something in networking or web development. If
        you for some reason wanted to contact me, you can do so through{" "}
        <a
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/kacper-skowro%C5%84ski-854424230/"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          style={{ textDecoration: "none" }}
          href="mailto:kacpermariaskowronski@protonmail.com"
        >
          write me an email.
        </a>{" "}
      </p>

      <style jsx>{`
        a {
          color: red;
        }
      `}</style>
    </>
  );
};

About.layout = Layout;
export default About;
