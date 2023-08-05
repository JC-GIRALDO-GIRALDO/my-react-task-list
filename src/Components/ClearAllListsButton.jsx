export default function ClearAllListsButton({ clearAllLists }) {
  return (
    <div>
      <p>Delete all generated tasks</p>
      <button onClick={clearAllLists}>Clear All</button>
    </div>
  );
}
