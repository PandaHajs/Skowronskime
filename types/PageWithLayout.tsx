import Layout from "../src/components/Layout";
import { FC } from "react";

type PageWithLayout = FC & { layout: typeof Layout };

export default PageWithLayout;
