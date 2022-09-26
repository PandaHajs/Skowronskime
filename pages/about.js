import Layout from "../src/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout>
        <p>I don&apos;t really know how you got here... but here goes</p>
        <div className="box">
          <span className="box-img">
            <Image src="/Koto.png" alt="Koto" width={500} height={500} />
          </span>
          <p>
            My first name&apos;s Casper but with a K and a C, middle name&apos;s
            Maria, yes it can be a man&apos;s name too, my surname&apos;s
            Skowroński
            <br />
            <br /> A 17 year old IT Student from Poland with the life motto “If
            I don&apos;t have to do it, I won&apos;t. If I have to do it,
            I&apos;ll make it quick.”, who for some reason made this site
            without having to
          </p>
        </div>
        <div className="links">
          <a href="">
            <Image src="/linkedin.svg" width={100} height={100} alt="Linked" />
          </a>
          <a href="https://github.com/PandaHajs">
            <Image src="/github.svg" width={100} height={100} alt="Github" />
          </a>
          <a href="">
            <Image src="/steam.svg" width={100} height={100} alt="Steam" />
          </a>
          <a href="">
            <Image src="/spotify.svg" width={100} height={100} alt="Spotify" />
          </a>
        </div>
      </Layout>

      <style jsx>{`
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
        }
        .box p {
          padding: 0 20px;
        }
        h1 {
          font-size: 50px;
          font-family: ;
        }
        .links Image {
          height: 30px;
          width: 30px;
          margin: 5px;
          border-radius: 100%;
        }
        .links Image:nth-child(2) {
          border-radius: 0%;
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
      `}</style>
    </>
  );
}
