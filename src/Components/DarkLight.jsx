import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function DarkLight() {
  const { toggleColorMode } = useColorMode();

  return (
    <div className="darkLight">
      <Button
        colorScheme="teal"
        onClick={() => toggleColorMode("light")}
        marginRight="4"
      >
        <SunIcon />
      </Button>
      <Button colorScheme="blue" onClick={() => toggleColorMode("dark")}>
        <MoonIcon />
      </Button>
    </div>
  );
}

export default DarkLight;
