import React from "react";

const CurrentCard = () => {
  return (
    <div className="flex flex-col p-4 bg-black shadow-xl rounded-md text-white m-6">
      <p className="text-center text-2xl pb-1">$ 45,565</p>
      <p className="text-center opacity-80 text-xs pb-3">Total Budget</p>
      <p className="pb-1 text-xs">Spent: $17,321</p>
      <p className="pb-1 text-xs">Received: $107,679</p>
    </div>
  );
};

export default CurrentCard;
