import React,{useState} from 'react'

export default function Slider() {
    const [minValue, setMinValue]=useState(0);
    const [maxValue, setMaxValue]=useState(0);
    const min = 0;
    const max = 2000;
    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 1);
        setMinValue(value);
      };
    
      const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue + 1);
        setMaxValue(value);
      };
  return (
    <div>
        <h1>Slider</h1>
        <input
            type="range"
            min={min}
            max={max}
            value={minValue}
            onChange={handleMinChange}
            className="absolute pointer-events-none appearance-none w-full h-2 bg-gray-200 rounded-lg"
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxValue}    
            onChange={handleMaxChange}
            className="absolute pointer-events-none appearance-none w-full h-2 bg-gray-200 rounded-lg"
          />
                  <div className="flex justify-between mt-8">
          <input
            type="number"
            className="w-1/2 p-2 mr-2 text-center bg-gray-100 border border-gray-300 rounded-md"
            value={minValue}
            onChange={handleMinChange}
            min={min}
            max={maxValue - 1}
          />
          <input
            type="number"
            className="w-1/2 p-2 ml-2 text-center bg-gray-100 border border-gray-300 rounded-md"
            value={maxValue}
            onChange={handleMaxChange}
            min={minValue + 1}
            max={max}
          />
        </div>
    </div>
  )
}
