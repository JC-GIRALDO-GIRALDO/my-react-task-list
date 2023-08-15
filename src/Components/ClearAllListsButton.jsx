import React from "react";
import { Text, Button } from "@chakra-ui/react";

export default function ClearAllListsButton({ clearAllLists, totalLists }) {
  return (
    <div className="clearAll">
      <Text fontSize="3xl">
        you have{" "}
        <span style={{ color: totalLists > 0 ? "red" : "black" }}>
          {totalLists}
        </span>{" "}
        pending tasks
      </Text>
      <Button
        margin="0 auto"
        colorScheme="red"
        variant="outline"
        width="100%"
        onClick={clearAllLists}
      >
        Clear All
      </Button>
    </div>
  );
}
