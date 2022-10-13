import React from "react";
import { useState } from "react";
import { FiCamera } from "react-icons/fi";

const Photography = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div
        className="flex justify-center items-center mr-[-10px] hover:mr-[10px] duration-500 h-10 bg-gray-900 p-5 rounded-md

"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <FiCamera size={30} />
      </div>

      {isHovering && (
        <div className="flex flex-col h-50 border-whiteborder-1 shadow-lg shadow-blue-500/50 bg-gradient-to-r from-cyan-500 to-blue-500">
          <h2>Chech out my Photography Page!</h2>
          <button className="border-2 border-white">Why not!</button>
        </div>
      )}
    </div>
  );
};

export default Photography;

// const Photography = () => {
//   return (
//     <div className="flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 h-10 bg-gradient-to-r from-blue-900 to-indigo-700">

//       <h1 className="text-black flex justify-between items-center w-full">Huigyiuyckfsdbdfsbhfsdsf</h1>
//     </div>

//   );
// };

// export default Photography;
