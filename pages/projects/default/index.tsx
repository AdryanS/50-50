import { NextPage } from "next";

import { Global } from "./styles";

import Head from "next/head";

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Default - Project</title>
      </Head>

      <Global />
      <div>
        <h1>hello world</h1>
      </div>
    </>
  );
};

export default index;
