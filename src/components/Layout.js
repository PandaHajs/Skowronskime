import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Skowronski.me</title>
        <link rel="icon" href="/Koto.png" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>Main</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>copyright © 2022 Kacper Skowronski</p>
      </footer>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          justify-content: left;
          margin-left: 5vw;
        }
        a {
          padding: 5px;
          text-decoration: none;
          color: #000;
        }
        a:hover {
          animation: why 1s;
        }
        header {
          display: flex;
          align-items: center;
          justify-content: left;
          background-color: pink;
          height: 5vh;
          width: 100%;
        }
        footer {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: pink;
          height: 5vh;
          margin-top: auto;
          width: 100%;
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
        @keyframes why {
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
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
