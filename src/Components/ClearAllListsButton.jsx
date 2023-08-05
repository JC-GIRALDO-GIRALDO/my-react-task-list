export default function ClearAllListsButton({ clearAllLists }) {
  return (
    <div>
      <p>Borrar todas las listas generadas:</p>
      <button onClick={clearAllLists}>Clear All</button>
    </div>
  );
}
