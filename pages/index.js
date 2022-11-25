import Layout from "../src/components/Layout";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  function handeLoad() {
    setIsActive((current) => !current);
  }
  return (
    <>
      <Layout>
        <div className={isActive ? "" : "test2"} onLoad={handeLoad}>
          <div className="box">
            <div className="test">
              <div className="box-img">
                <Image src="/Koto.png" alt="Koto" width={200} height={200} />
              </div>
            </div>
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
          <div className="links">
            <a href="https://www.linkedin.com/in/kacper-skowro%C5%84ski-854424230/">
              <Image src="/linkedin.svg" width={50} height={50} alt="Linked" />
            </a>
            <a href="https://github.com/PandaHajs">
              <Image src="/github.svg" width={50} height={50} alt="Github" />
            </a>
            <a href="https://steamcommunity.com/id/Brothersmoment">
              <Image src="/steam.svg" width={50} height={50} alt="Steam" />
            </a>
            <a href="https://open.spotify.com/user/bw0ll1dlqune2qo1lh0xjhqxo?si=12fdb2fb1b954d54">
              <Image src="/spotify.svg" width={50} height={50} alt="Spotify" />
            </a>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .test2 * {
          animation: none !important;
        }
        .box-img {
          border-radius: 100%;
          overflow: hidden;
          animation: spin 3s normal;
          display: flex;
        }
        .test {
          animation: slide 3s normal;
        }
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px;
          flex-direction: column;
        }
        .box p {
          padding: 0 20px;
        }
        .links Image {
          height: 30px;
          width: 30px;
          margin: 5px;
          border-radius: 100%;
        }
        .links a:nth-child(1) {
          border-radius: 5%;
        }

        .links a {
          height: 46px;
          width: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2px;
          border-radius: 100%;
          overflow: hidden;
          transition: 0.5s;
        }
        .links a:hover {
          background-color: red;
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
      `}</style>
    </>
  );
}
