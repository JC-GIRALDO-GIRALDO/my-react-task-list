import { Heading } from "@chakra-ui/react";

export default function Header({ nameTaskList }) {
  return (
    <>
      <Heading as="h2" size="4xl" noOfLines={1}>
        {nameTaskList}
      </Heading>
    </>
  );
}
