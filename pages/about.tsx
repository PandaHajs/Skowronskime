import Layout from "../lib/Layout";
import { getAge } from "../lib/Age";
import { FC } from "react";
type AboutComponent = FC & { layout: typeof Layout };
import styles from "../styles/about.module.scss";

const About: AboutComponent = () => {
  const age = getAge();
  return (
    <>
      <div className={styles.part1}>
        <h1>About me</h1>
        <p>
          I was born on [REDACTED] in [REDACTED], I&apos;m currently {age} years
          old and living in Poznan, Poland. At this point in time I have only
          primary education and finished more than half of my High School. I
          have the CISCO ITE 5.0 certificate and succesfully underwent the CISCO
          CCNA1 course (I&apos;m not certified tho). I&apos;m not yet sure what
          I want to do in life, but I&apos;m certain it will either be something
          in networking or web development.
        </p>
      </div>
      <div className={styles.projects}>
        <a href="" className={styles.projecta}>
          <div className={styles.projectdiv}>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
              maximus erat, malesuada accumsan nibh. Nam eu tortor ac metus
              tempus luctus.
            </p>
          </div>
        </a>
        <a href="" className={styles.projecta}>
          <div className={styles.projectdiv}>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
              maximus erat, malesuada accumsan nibh. Nam eu tortor ac metus
              tempus luctus.
            </p>
          </div>
        </a>
        <a href="" className={styles.projecta}>
          <div className={styles.projectdiv}>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
              maximus erat, malesuada accumsan nibh. Nam eu tortor ac metus
              tempus luctus.
            </p>
          </div>
        </a>
        <a href="" className={styles.projecta}>
          <div className={styles.projectdiv}>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
              maximus erat, malesuada accumsan nibh. Nam eu tortor ac metus
              tempus luctus.
            </p>
          </div>
        </a>
      </div>

      <div className={styles.part2}></div>
    </>
  );
};

About.layout = Layout;
export default About;
