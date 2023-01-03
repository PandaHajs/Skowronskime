import Layout from "../lib/Layout";
import { FC } from "react";
type NoComponent = FC & { layout: typeof Layout };

const NoPage: NoComponent = () => {
  return (
    <>
      <h1>Error 404, Page not found</h1>

      <style jsx>{``}</style>
    </>
  );
};

NoPage.layout = Layout;
export default NoPage;
