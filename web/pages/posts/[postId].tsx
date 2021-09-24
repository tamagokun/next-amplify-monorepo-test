import React from "react";

type Props = {
  title: string;
};

export default function Index({ title }: Props) {
  return <div>Hello {title}</div>;
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
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
