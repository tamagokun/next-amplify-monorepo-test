import React from "react";

type Props = {
  title: string;
};

export default function Index({ title }: Props) {
  return <div>Hello {name}</div>;
}

export async function getStaticProps() {
  return {
    props: {
      title: "Post Title",
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
