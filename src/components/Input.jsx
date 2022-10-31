const Input = ({ className, onChange, value, placeholder, type }) => {
  return (
    <input
      type={type || "text"}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={
        "transition-all bg-white dark:bg-slate-800 shadow-lg focus-within:shadow-xl rounded-xl p-3 " +
        className
      }
    />
  );
};

export default Input;
