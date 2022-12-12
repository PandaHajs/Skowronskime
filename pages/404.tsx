import Layout from "../src/components/Layout";
import { FC } from "react";
type NoComponent = FC & { layout: typeof Layout };

const NoPage: NoComponent = () => {
  return (
    <>
      <h1>Error 404, No page found</h1>

      <style jsx>{``}</style>
    </>
  );
};

NoPage.layout = Layout;
export default NoPage;
