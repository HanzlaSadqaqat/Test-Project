import { useEffect, useState } from "react";
import styles from "./Checkbox.module.css";
import checkboxTick from "../../../assets/svgs/checkboxTick.svg";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: any) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <label className="flex items-center cursor-pointer">
      {/* Hidden default checkbox */}
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={onChange}
      />

      {/* Custom styled checkbox */}
      <div
        className={`w-[23px] h-[23px] flex items-center justify-center rounded-[6px] border border-[#CDCDCD]  transition-all duration-200 ${
          isChecked
            ? "bg-[#2469F6] hover:bg-[#5087F8] border-none opacity"
            : "bg-transparent "
        }`}
      >
        {isChecked && (
          <span className="text-white text-lg font-bold">
            <img src={checkboxTick} />
          </span>
        )}
      </div>
    </label>
  );
};

export default Checkbox;
