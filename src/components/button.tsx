export default function Button({
  label,
  type = "normal",
}: {
  label: string | React.ReactNode;
  type?: "normal" | "prominent";
}) {
  let buttonStyles = (type == "prominent")
    ? "text-white bg-blue-600 hover:bg-blue-700"
    : "bg-blue-600/10 text-blue-600 hover:bg-blue-600/20";
  return (
    <button className={"p-3 rounded-full cursor-pointer transition-colors " + buttonStyles}>
      {label}
    </button>
  );
}
