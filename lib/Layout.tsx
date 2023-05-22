import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useTheme } from "next-themes";
import styles from "../styles/layout.module.scss";
import clsx from "clsx";
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
  const year = new Date().getFullYear();

  const { theme, setTheme } = useTheme();

  function light() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Skowronski</title>
        <link rel="icon" href="/Koto.png" />
      </Head>

      <header className={styles.header}>
        <nav onClick={hide} className={styles.nav}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <p className={styles.headerp}>Main</p>
          </Link>
          <Link href="/about" style={{ textDecoration: "none" }}>
            <p className={styles.headerp}>About</p>
          </Link>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <p className={styles.headerp}>Contact</p>
          </Link>
        </nav>
        <button onClick={drop} className={styles.headerbutton}>
          <picture>
            <source srcSet="/settings.svg" type="image/svg" />
            <img
              src="/settings.svg"
              alt="Settings"
              className={styles.headerimg}
            />
          </picture>
        </button>
      </header>
      <ul className={isDrop ? styles.list : styles.list_hid}>
        <button
          onClick={light}
          className={clsx(styles.listbutton, styles.listbutton2)}
        >
          <span className={styles.listspan}>
            <picture className={theme == "dark" ? styles.hide : ""}>
              <source srcSet="/moon.svg" type="image/svg" />
              <img src="/moon.svg" alt="moon" className={styles.listimg} />
            </picture>
            <picture className={theme == "dark" ? "" : styles.hide}>
              <source srcSet="/sun.svg" type="image/svg" />
              <img src="/sun.svg" alt="sun" className={styles.listimg} />
            </picture>
            <p className={styles.listbuttp}>Toggle Mode</p>
          </span>
        </button>
        <button className={styles.listbutton}>
          <span className={styles.listspan}>
            <picture>
              <source srcSet="/code.svg" type="image/svg" />
              <img src="/code.svg" alt="Code" className={styles.listimg} />
            </picture>
            <Link
              href="https://github.com/PandaHajs/Skowronskime"
              style={{ textDecoration: "none" }}
            >
              <p className={styles.listbuttp}>Source Code</p>
            </Link>
          </span>
        </button>
      </ul>

      <main onClick={hide} className={styles.main}>
        {children}
      </main>

      <footer onClick={hide} className={styles.footer}>
        <p className={styles.footerp}>copyright © {year} Kacper Skowronski</p>
      </footer>
    </div>
  );
};

export default Layout;
