type Props = {
  children: React.ReactNode;
} & React.DOMAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className="text-2x p-4 rounded-xl hover:bg-black/20 dark:hover:bg-white/20"
    >
      {props.children}
    </button>
  );
}
