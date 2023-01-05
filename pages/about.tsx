import Layout from "../lib/Layout";
import { getAge } from "../lib/age";
import { FC, useEffect, useState } from "react";
type AboutComponent = FC & { layout: typeof Layout };

const About: AboutComponent = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const names = [
      "IT Student",
      "Kac Biznesu",
      "Some random guy",
      "The perfect victim",
    ];
    setName(names[Math.floor(Math.random() * names.length)]);
  }, []);
  const age = getAge();
  return (
    <>
      <div className="part1">
        <h1>Under construction</h1>
        <p>Again...</p>
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

About.layout = Layout;
export default About;
