import { FaCirclePlus } from "../../node_modules/react-icons/fa6";
export default function FormCreateList() {
  return (
    <>
      {/* componente del form input + boton  */}
      <form>
        <input type="text" placeholder="Add your new list..." />
        <button type="submit">
          <FaCirclePlus />
        </button>
      </form>
    </>
  );
}
