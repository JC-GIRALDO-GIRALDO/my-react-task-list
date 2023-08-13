import React from "react";

export default function ClearAllListsButton({ clearAllLists, totalLists }) {
  return (
    <div className="clearAll">
      <p>you have {totalLists} pending tasks</p>
      <button onClick={clearAllLists}>Clear All</button>
    </div>
  );
}
