import Layout from "../src/components/Layout";
import { useEffect, useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  function handleLoad() {
    setIsActive((current) => !current);
  }
  const names = [
    "IT Student",
    "Kac Biznesu",
    "Some random guy",
    "The perfect victim",
  ];
  const [name, setName] = useState("");
  useEffect(() => {
    setName(names[Math.floor(Math.random() * names.length)]);
  }, []);

  return (
    <>
      <Layout>
        <div className="ja-box">
          <div className={isActive ? "box-img-2" : ""} onLoad={handleLoad}>
            <div className="animation2">
              <div className="box-img">
                <picture>
                  <source srcSet="/ja2.jpg" type="image/jpg" />
                  <img src="/ja2.jpg" alt="Koto" />
                </picture>
              </div>
            </div>
          </div>
          <div className="ja-box-text">
            <h2>Kacper Skowroński</h2>
            <p>{name}</p>
            <p>
              An 18 year old IT Student from Poland with the life motto “If I
              don&apos;t have to do it, I won&apos;t. If I have to do it,
              I&apos;ll make it quick.”, who for some reason made this site
              without having to
            </p>
          </div>
        </div>
        <div className={isActive ? "" : "links_an"} onLoad={handleLoad}>
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
        .ja-box-text p:nth-child(2) {
          opacity: 0.5;
          font-style: italic;
          margin: 5px 0px 5px 0px;
        }
        .ja-box-text {
          margin-left: 20px;
        }
        .ja-box-text p {
          padding: 0px !important;
        }
        .box-img img {
          width: 200px;
          height: 200px;
          filter: invert(0%);
          border-radius: 100%;
        }
        img {
          width: 50px;
          height: 50px;
          filter: invert(100%);
          border-radius: 100%;
          transition: 0.5s;
          margin: 5px;
        }
        .links_an {
          animation: opacity2 3s ease-in-out;
        }
        img:hover {
          background-color: #00ffcc;
        }
        .links a:nth-child(1) img {
          border-radius: 5% !important;
        }
        .box-img-2 * {
          animation: none;
        }
        .ja-box {
          display: flex;
          height: 130px;
        }
        .box-img {
          animation: spin 3s normal;
          display: flex;
        }
        .animation2 {
          animation: slide 3s normal;
        }
        .links a {
          height: 46px;
          width: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px;
          transition: 0.5s;
        }
        .links {
          display: flex;
          justify-content: right;
          align-items: center;
          margin: 5px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .ja-box {
            display: flex;
            flex-direction: column;
            height: 370px;
          }
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
