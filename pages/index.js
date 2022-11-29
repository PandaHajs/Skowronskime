import Layout from "../src/components/Layout";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  function handleLoad() {
    setIsActive((current) => !current);
  }
  return (
    <>
      <Layout>
        <div className="text">
          <div className={isActive ? "" : "box-img-2"} onLoad={handleLoad}>
            <div className="animation2">
              <div className="box-img">
                <Image src="/Koto.png" alt="Koto" width={200} height={200} />
              </div>
            </div>
          </div>
          <div className={isActive ? "text2" : ""} onLoad={handleLoad}>
            <p>I don&apos;t really know how you got here... but here goes</p>
            <p>
              My first name&apos;s Casper but with a K and a C, middle
              name&apos;s Maria, yes it can be a man&apos;s name too, my
              surname&apos;s Skowroński
              <br />
              <br /> An 18 year old IT Student from Poland with the life motto
              “If I don&apos;t have to do it, I won&apos;t. If I have to do it,
              I&apos;ll make it quick.”, who for some reason made this site
              without having to
            </p>
          </div>
        </div>
        <div className={isActive ? "links_an" : ""} onLoad={handleLoad}>
          <div className="links">
            <a href="https://www.linkedin.com/in/kacper-skowro%C5%84ski-854424230/">
              <picture>
                <source srcSet="/linkedin.svg" type="image/svg" />
                <img src="/linkedin.svg" alt="Linked" />
              </picture>
            </a>
            <a href="https://github.com/PandaHajs">
              <picture>
                <source srcSet="/github.svg" type="image/svg" />
                <img src="/github.svg" alt="Github" />
              </picture>
            </a>
            <a href="https://steamcommunity.com/id/Brothersmoment">
              <picture>
                <source srcSet="/steam.svg" type="image/svg" />
                <img src="/steam.svg" alt="Steam" />
              </picture>
            </a>
            <a href="https://open.spotify.com/user/bw0ll1dlqune2qo1lh0xjhqxo?si=12fdb2fb1b954d54">
              <picture>
                <source srcSet="/spotify.svg" type="image/svg" />
                <img src="/spotify.svg" alt="Spotify" />
              </picture>
            </a>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .text2 {
          animation: opacity 5s normal;
          opacity: 1;
        }
        img {
          width: 50px;
          height: 50px;
          filter: invert(100%);
          border-radius: 100%;
        }
        .links_an {
          animation: opacity2 3s ease-in-out;
        }
        img:hover {
          background-color: #00ffcc;
          transition: 0.5s;
        }
        .links a:nth-child(1) img {
          border-radius: 5% !important;
        }
        .box-img-2 * {
          animation: none;
        }
        .box-img {
          border-radius: 100%;
          overflow: hidden;
          animation: spin 3s normal;
          display: flex;
        }
        .animation2 {
          animation: slide 3s normal;
        }
        .text {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px;
          flex-direction: column;
        }
        .text p {
          padding: 0 20px;
        }

        .links a {
          height: 46px;
          width: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2px;

          transition: 0.5s;
        }
         {
          filter: brightness(0) invert(1);
        }

        .links {
          display: flex;
          justify-content: right;
          align-items: center;
          margin: 5px;
          width: 100%;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
            opacity: 0;
          }
          100% {
            transform: rotate(359deg);
            opacity: 1;
          }
        }
        @keyframes slide {
          0% {
            transform: translateX(-300px);
          }
          100% {
            transform: translateX(0px);
          }
        }
        @keyframes opacity {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes opacity2 {
          0% {
            opacity: 0;
            transform: translateY(100px);
          }
          40% {
            transform: translateY(100px);
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
