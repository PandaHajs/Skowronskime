import Layout from "./layout";
import { FC } from "react";

type PageWithLayout = FC & { layout: typeof Layout };

export default PageWithLayout;
