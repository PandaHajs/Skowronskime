import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Skowronski</title>
        <link rel="icon" href="/Koto.png" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <p>Main</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>copyright © 2022 Kacper Skowronski</p>
      </footer>
      <style jsx>{`
        * {
          color: white;
        }
        nav {
          display: flex;
          align-items: center;
          justify-content: left;
          margin-left: 5vw;
        }
        p {
          padding: 5px;
          text-decoration: none;
          color: white;
        }
        p:hover {
          animation: rainbow 10s ease-in-out;
        }
        header {
          display: flex;
          align-items: center;
          justify-content: left;
          background-color: #26262a;
          height: 5vh;
          width: 100%;
        }
        footer {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #26262a;
          height: 5vh;
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
          height: 90vh;
          background-color: #26262a;
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
}
