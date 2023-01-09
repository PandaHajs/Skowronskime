import Layout from "../lib/Layout";
import { FC } from "react";
type NoComponent = FC & { layout: typeof Layout };

const NoPage: NoComponent = () => {
  return (
    <>
      <div className="part1">
        <h1>Error 404</h1>
        <p>No page found</p>
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

NoPage.layout = Layout;
export default NoPage;
