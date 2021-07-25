import React from "react";
import { NextSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";
import tw from "twin.macro";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  meta: { title?: string };
}

const defaultMeta = {
  author: "Kervin Vasquez",
};

const Container = styled.div`
  h1 {
    ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`};
  }
`;

const Post = ({ children, meta }: Props) => {
  const postMeta = { ...defaultMeta, ...meta };
  return (
    <MDXProvider components={{}}>
      <Container>
        <h1>{postMeta.title}</h1>
        {children}
      </Container>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />
    </MDXProvider>
  );
};

export default Post;
