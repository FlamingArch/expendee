import React from "react";

const Button = ({ className, type, icon }) => {
  return (
    <button
      type={type}
      className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl shadow-lg hover:shadow-xl transition-all"
    >
      {icon && <icon />}
      Button
    </button>
  );
};

export default Button;
