import { FaCirclePlus } from "../../node_modules/react-icons/fa6";
import { useState } from "react";
export default function FormCreateList() {
  const [deleteList, setDeleteList] = useState("");
  return (
    <>
      {/* componente del form input + boton  */}
      <form>
        <input type="text" placeholder="Add your new list..." />
        <button type="submit" onClick={() => setDeleteList(deleteList)}>
          <FaCirclePlus />
        </button>
      </form>
    </>
  );
}
