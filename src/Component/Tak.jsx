import React, {useEffect, useRef} from 'react'
import '../App'

export default function Tak() {
    const flattenedArray = [
        { Ball: 1, Over: 1, Runs: "0" },
        { Ball: 2, Over: 1, Runs: "1" },
        { Ball: 3, Over: 1, Runs: "4" },
        { Ball: 4, Over: 1, Runs: "6" },
        { Ball: 5, Over: 1, Runs: "0" },
        { Ball: 6, Over: 1, Runs: "2" },
        { Ball: 1, Over: 2, Runs: "W" },
        { Ball: 2, Over: 2, Runs: "0" },
        { Ball: 3, Over: 2, Runs: "1" },
        { Ball: 4, Over: 2, Runs: "4" },
        { Ball: 5, Over: 2, Runs: "6" },
        { Ball: 6, Over: 2, Runs: "0" },
        { Ball: 1, Over: 3, Runs: "1" },
        { Ball: 2, Over: 3, Runs: "4" },
        { Ball: 3, Over: 3, Runs: "0" },
        { Ball: 4, Over: 3, Runs: "W" },
        { Ball: 5, Over: 3, Runs: "2" },
        { Ball: 6, Over: 3, Runs: "6" }
      ];

      const divRef = useRef(null);
  
      useEffect(() => {
        // Ensure the div is scrolled to the end after the component mounts or updates
        if (divRef.current) {
           divRef.current.scrollLeft = divRef.current.scrollWidth;
        }
      }, []);

  return (
    <div ref={divRef} className={`mb-5 flex overflow-x-auto flex-row`}>
        {flattenedArray?.map((item, index) => (
        (
            <div
            key={index}
            className="w-[100%] mt-1 flex items-start p-4 text-black "
            >
            <div className="mr-3 text-black flex flex-row">
                <div className="flex">
                {item?.Ball == 6 && (
                    <span className="flex flex-row min-w-fit">
                    Over {item?.Over}
                    </span>
                )}
                </div>
                <div
                className={`h-8 w-8 rounded-full ${item?.Runs === "6" || item?.Runs === "4" ? "bg-[#4285F4] text-white" : (item?.Runs?.includes('W') || item?.Runs?.includes('w')) ? "bg-[#F6423A] text-white" :"bg-[#FFFFFF0D]"} border border-[#D8DBEA] flex items-center justify-center`}
                >
                {item?.Runs?.includes('W') ? "W" : item?.Runs}
                </div>
            </div>
            </div>
        )
        ))}
    </div>
  )
}
