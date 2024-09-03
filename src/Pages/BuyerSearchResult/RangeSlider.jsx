import { useState } from 'react';
import './CustomRange.css'; 

const RangeSlider = () => {
  const [value, setValue] = useState(25);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="w-[60%] mx-auto">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="range"
        step="25"
        onChange={handleChange}
      />
      <div className="flex w-full justify-between px-2 text-xs">
        <span>20k</span>
        <span>30k</span>
        <span>40k</span>
        <span>50k</span>
        <span>60k+</span>
      </div>
    </div>
  );
};

export default RangeSlider;
