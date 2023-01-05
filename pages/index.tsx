import Layout from "../lib/Layout";
import { useEffect, useState, FC } from "react";
import { getAge, indefeniteArticle } from "../lib/age";
type HomeComponent = FC & { layout: typeof Layout };

const Home: HomeComponent = () => {
  const age = getAge();
  const [name, setName] = useState("");
  useEffect(() => {
    const names = [
      "An IT Student",
      "Kac Biznesu",
      "Just some random guy",
      "The perfect victim",
      "A beloved boyfriend",
      "A guy who has no idea what he's doing",
    ];
    setName(names[Math.floor(Math.random() * names.length)]);
  }, []);
  return (
    <>
      <div className="part1">
        <h1>Hello there! I&apos;m Kacper Skowronski</h1>
        <h1></h1>
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
        }
        .part1 {
          height: 50vh;
          padding: 0 30vw;
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

Home.layout = Layout;
export default Home;
