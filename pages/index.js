import Layout from "../src/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <h1>I DID THIS</h1>
          <h1>FOR NO REASON</h1>
          <h1>AT ALL</h1>
        </div>
      </Layout>

      <style jsx>{`
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
      `}</style>
    </>
  );
}
