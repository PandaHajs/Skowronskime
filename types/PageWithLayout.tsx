import Layout from "../src/components/Layout";

type PageWithLayout = NextPage & { layout: typeof Layout };

export default PageWithLayout;
