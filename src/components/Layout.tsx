import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useTheme } from "next-themes";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [isDrop, setIsDrop] = useState(false);
  function drop() {
    setIsDrop((current) => !current);
  }
  function hide() {
    setIsDrop(false);
  }

  const { theme, setTheme } = useTheme();

  function light() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Skowronski</title>
        <link rel="icon" href="/Koto.png" />
      </Head>

      <header>
        <nav onClick={hide}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <p>Main</p>
          </Link>
          <Link href="/about" style={{ textDecoration: "none" }}>
            <p>About</p>
          </Link>
        </nav>
        <button onClick={drop}>
          <picture>
            <source srcSet="/settings.svg" type="image/svg" />
            <img src="/settings.svg" alt="Settings" />
          </picture>
        </button>
      </header>
      <ul className={isDrop ? "list" : "list_hid"}>
        <button onClick={light}>
          <picture className={theme == "dark" ? "hide" : ""}>
            <source srcSet="/dark.svg" type="image/svg" />
            <img src="/dark.svg" alt="dark" />
          </picture>
          <picture className={theme == "dark" ? "" : "hide"}>
            <source srcSet="/light.svg" type="image/svg" />
            <img src="/light.svg" alt="light" />
          </picture>
          <p>Toggle Mode</p>
        </button>
        <button>
          <picture>
            <source srcSet="/code.svg" type="image/svg" />
            <img src="/code.svg" alt="Code" />
          </picture>
          <Link
            href="https://github.com/PandaHajs/Skowronskime"
            style={{ textDecoration: "none" }}
          >
            <p>Source Code</p>
          </Link>
        </button>
      </ul>

      <main onClick={hide}>{children}</main>

      <footer onClick={hide}>
        <p>copyright © 2022 Kacper Skowronski</p>
      </footer>
      <style jsx>{`
        .hide {
          display: none;
        }
        .list {
          position: absolute;
          right: 15px;
          top: 6vh;
          transition: 0.5s;
          display: flex;
          flex-direction: column;
        }
        .list button {
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--button);
          width: 200px;
          height: 50px;
          border: none;
        }
        .list button:nth-of-type(1) {
          border-bottom: 1px dashed var(--border);
        }
        .list_hid {
          display: none;
        }
        .list img {
          width: 20px;
          filter: var(--filter);
          margin-right: 10px;
        }
        * {
          color: var(--text);
          transition: 0.5s;
        }
        header button {
          margin-right: 50px;
          margin-top: 5px;
          height: 35px;
          width: 40px;
          background-color: transparent;
          border: none;
          filter: var(--filter);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        header img {
          height: 33px;
          width: 33px;
        }
        header button:active {
          background-color: white;
          border: 1px solid black;
        }
        nav {
          display: flex;
          align-items: center;
          justify-content: left;
          margin-left: 5vw;
          width: 100%;
        }
        p {
          padding: 5px;
          text-decoration: none;
          color: var(--text);
        }
        header p:hover {
          animation: rainbow 10s ease-in-out;
        }
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 5vh;
          width: 100%;
          background-color: var(--main);
        }
        footer {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 5vh;
          width: 100%;
          background-color: var(--main);
        }
        footer p {
          padding: 5px;
        }
        main {
          display: flex;
          flex-direction: column;
          align-items: left;
          padding-left: 30vw;
          padding-right: 30vw;
          padding-top: 5vh;
          background-color: var(--main);
          height: 90vh;
        }
        .container {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        @media (max-width: 768px) {
          main {
            padding-left: 3vw;
            padding-right: 3vw;
          }
        }
        @keyframes rainbow {
          0% {
            transform: rotate(0deg);
            color: red;
          }
          15% {
            color: orange;
          }
          30% {
            color: yellow;
          }
          45% {
            color: green;
          }
          60% {
            color: blue;
          }
          75% {
            color: indigo;
          }
          90% {
            color: violet;
          }
          100% {
            transform: rotate(14400deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
