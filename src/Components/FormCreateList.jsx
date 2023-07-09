import { FaCirclePlus } from "../../node_modules/react-icons/fa6";
export default function FormCreateList() {
  return (
    <>
      <form>
        <input type="text" placeholder="Add your new todo" />
        <button type="submit">
          <FaCirclePlus />
        </button>
      </form>
    </>
  );
}
