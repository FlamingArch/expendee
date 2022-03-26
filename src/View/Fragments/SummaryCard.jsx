import React from "react";

const SummaryCard = ({ totalBudget, spent, received }) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-md m-4 p-4 bg-black text-white shadow-xl place-content-center flex flex-col">
        <div className="flex flex-col pb-2 place-items-center">
          <h1 className="pb-1 text-2xl">{totalBudget}</h1>
          <p className="font-medium text-gray-400">Total Budget</p>
        </div>
        <p className="font-medium pb-1 text-white">Spent: {spent}</p>
        <p className="font-medium text-white">Received: {received}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
