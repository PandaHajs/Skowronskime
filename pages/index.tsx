import Layout from "../lib/Layout";
import { useEffect, FC, useState } from "react";
import { getAge, indefeniteArticle } from "../lib/age";
type HomeComponent = FC & { layout: typeof Layout };
import { getName } from "../lib/names";
import styles from "../styles/index.module.scss";

const Home: HomeComponent = () => {
  const [isTransition, setIsTransition] = useState(false);
  const age = getAge();
  const [name, setName] = useState("");
  useEffect(() => {
    setName(getName);
    setIsTransition(true);
    setTimeout(() => {
      setIsTransition(false);
    }, 400);
  }, []);
  const rollName = () => {
    setTimeout(() => {
      setIsTransition(false);
    }, 400);
    setTimeout(() => {
      setName(getName);
    }, 100);
    setTimeout(() => {
      setIsTransition(true);
    }, 100);
  };

  return (
    <>
      <div className={styles.part1}>
        <h1>Hello there! I&apos;m Kacper Skowronski</h1>
        <p
          onClick={rollName}
          className={isTransition ? styles.animate : styles.hide}
          style={{ fontStyle: "italic", opacity: 0.5, userSelect: "none" }}
        >
          {name || "..."}
        </p>
        <p>
          {indefeniteArticle(age)} {age} years old IT Student from Poland, with
          the life motto &quot;If I don&apos;t have to do it, I won&apos;t. If I
          have to do it, I&apos;ll make it quick.&quot; who for some reason made
          this site without having to.
        </p>
      </div>
      <div className={styles.part2}></div>
    </>
  );
};

Home.layout = Layout;
export default Home;
