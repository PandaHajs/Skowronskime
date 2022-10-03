import Layout from "../src/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="big-box">
          <div className="anim">
            <h1>I DID THIS</h1>
            <h1>FOR NO REASON</h1>
            <h1>AT ALL</h1>
          </div>
          <div className="main">
            <div className="box">
              <div className="box-img">
                <Image src="/Koto.png" alt="Koto" width={200} height={200} />
              </div>
              <p>I don&apos;t really know how you got here... but here goes</p>
              <p>
                My first name&apos;s Casper but with a K and a C, middle
                name&apos;s Maria, yes it can be a man&apos;s name too, my
                surname&apos;s Skowroński
                <br />
                <br /> An 18 year old IT Student from Poland with the life motto
                “If I don&apos;t have to do it, I won&apos;t. If I have to do
                it, I&apos;ll make it quick.”, who for some reason made this
                site without having to
              </p>
            </div>
            <div className="links">
              <a href="https://www.linkedin.com/in/kacper-skowro%C5%84ski-854424230/">
                <Image
                  src="/linkedin.svg"
                  width={50}
                  height={50}
                  alt="Linked"
                />
              </a>
              <a href="https://github.com/PandaHajs">
                <Image src="/github.svg" width={50} height={50} alt="Github" />
              </a>
              <a href="https://steamcommunity.com/id/Brothersmoment">
                <Image src="/steam.svg" width={50} height={50} alt="Steam" />
              </a>
              <a href="https://open.spotify.com/user/bw0ll1dlqune2qo1lh0xjhqxo?si=12fdb2fb1b954d54">
                <Image
                  src="/spotify.svg"
                  width={50}
                  height={50}
                  alt="Spotify"
                />
              </a>
            </div>
          </div>
        </div>
      </Layout>

      <style jsx>{`
        .main {
          animation: fadein 10s;
        }
        .anim {
          position: absolute;
        }
        .box img {
          height: 150px;
          border-radius: 100%;
        }
        .box-img {
          border-radius: 100%;
          overflow: hidden;
          display: flex;
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
        .anim h1 {
          font-size: 10vh;
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
        h1 {
          font-size: 100px;
          text-align: center;
          text-shadow: 2px 2px #000000;
          text-wrap: wrap;
        }

        h1:nth-child(1) {
          opacity: 0;
          animation: popup 8s linear;
        }
        h1:nth-child(2) {
          opacity: 0;
          animation: popup 6s 2s linear;
        }
        h1:nth-child(3) {
          opacity: 0;
          animation: popup 4s 4s linear;
        }

        @keyframes popup {
          0% {
            opacity: 0;
          }
          75% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes fadein {
          0%{
            opacity: 0;
          }
          75%{
            opacity: 0;
          }
          100%{
            opacity: 1;
          }
      `}</style>
    </>
  );
}
