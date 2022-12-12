import Layout from "../src/components/Layout";
import { FC } from "react";
type AboutComponent = FC & { layout: typeof Layout };

const About: AboutComponent = () => {
  return (
    <>
      <h1>Nothing here yet</h1>

      <style jsx>{``}</style>
    </>
  );
};

About.layout = Layout;
export default About;
