import { FaArrowUp, FaArrowDown } from "react-icons/fa";

 const SwitchToggle = () => (
  <div className="flex grid-cols-2 items-center gap-1 p-1 py-2 text-white">
    <FaArrowUp size={14} />
    <FaArrowDown size={14} />
  </div>
);


export default SwitchToggle
