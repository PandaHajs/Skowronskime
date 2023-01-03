import Layout from "../lib/Layout";
import { FC } from "react";
type InternalComponent = FC & { layout: typeof Layout };

const InternalPage: InternalComponent = () => {
  return (
    <>
      <h1>Internal Server Error</h1>

      <style jsx>{``}</style>
    </>
  );
};

InternalPage.layout = Layout;
export default InternalPage;
