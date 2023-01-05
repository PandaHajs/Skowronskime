import Layout from "../lib/Layout";
import { useEffect, FC, useState } from "react";
import { getAge, indefeniteArticle } from "../lib/age";
type HomeComponent = FC & { layout: typeof Layout };
import { getName } from "../lib/names";

const Home: HomeComponent = () => {
  const age = getAge();
  const [name, setName] = useState("");
  useEffect(() => {
    setName(getName);
  }, []);
  return (
    <>
      <div className="part1">
        <h1>Hello there! I&apos;m Kacper Skowronski</h1>
        <p>{name}</p>
        <p>
          {indefeniteArticle(age)} {age} years old IT Student from Poland, with
          the life motto &quot;If I don&apos;t have to do it, I won&apos;t. If I
          have to do it, I&apos;ll make it quick.&quot; who for some reason made
          this site without having to.
        </p>
      </div>
      <div className="part2"></div>
      <style jsx>{`
        p:first-of-type {
          font-style: italic;
          opacity: 0.5;
          transition: 0.5s;
          animation: fadein 1s;
        }
        .part1 {
          height: 50vh;
          padding-left: 30vw;
          padding-right: 30vw;
          padding-top: 15vh;
          z-index: 1;
        }
        .part2 {
          background-color: var(--main2);
          height: 50vh;
          clip-path: polygon(0% 14%, 100% 0px, 100% 100%, 0px 100%);
        }
        @keyframes fadein {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 0.5;
          }
        }
        @media (max-width: 768px) {
          .part1 {
            padding-left: 6vw;
            padding-right: 6vw;
            padding-top: 10vh;
          }
        }
      `}</style>
    </>
  );
};

Home.layout = Layout;
export default Home;
