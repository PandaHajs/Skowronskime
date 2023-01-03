import Layout from "./Layout";
import { FC } from "react";

type PageWithLayout = FC & { layout: typeof Layout };

export default PageWithLayout;
