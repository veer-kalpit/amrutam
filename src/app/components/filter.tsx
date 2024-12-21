import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FilterDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        className="flex items-center justify-between bg-[#DCEEDC] h-10 rounded-md px-[13px] py-[6px] w-[147px] text-[#585858] text-[16px] font-medium"
        onClick={toggleDropdown}
      >
        All Filters
        <FiChevronDown className="text-[#585858] text-[16px] font-medium " />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-40">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Option 1
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Option 2
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Option 3
          </li>
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
