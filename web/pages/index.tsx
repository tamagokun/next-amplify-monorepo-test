import React from "react";

type Props = {
  name: string;
};

export default function Index({ name }: Props) {
  return <div>Hello {name}</div>;
}

export async function getServerSideProps() {
  return {
    props: {
      name: "Bob",
    },
  };
}
