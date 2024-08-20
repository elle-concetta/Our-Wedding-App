import * as React from "react";

import { Global } from "@emotion/react";

import Landing from "src/modules/Landing";
import { globalCss } from "src/styles/global";

import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => (
  <>
    <Global styles={globalCss} />
    <Landing />
  </>
);

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Wedding of Ankit & Elle</title>
      <link rel="preload" as="image" href="/images/cover-website.png"></link>
      <meta property="og:site_name" content="The Wedding of Ankit and Elle" />
      <meta property="og:title" content="The Wedding of Ankit and Elle" />
      <meta
        name="description"
        content="Join us as we celebrate a love that’s blossomed into forever – we’re tying the knot and can’t wait to share this magical day with you!"
      />
      <meta
        property="og:description"
        content="Join us as we celebrate a love that’s blossomed into forever – we’re tying the knot and can’t wait to share this magical day with you!"
      />
      <meta property="og:url" content="https://ankitandelle.com" />
      <meta
        property="og:image"
        content="https://ankitandelle.com/images/og-image.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  );
};
