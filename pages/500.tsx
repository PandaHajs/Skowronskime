import Layout from "../lib/layout";
import { FC } from "react";
type InternalComponent = FC & { layout: typeof Layout };

const InternalPage: InternalComponent = () => {
  return (
    <>
      <div className="part1">
        <h1>Error 500</h1>
        <p>Internal Server Error</p>
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

InternalPage.layout = Layout;
export default InternalPage;
