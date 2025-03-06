type Props = {
  children: React.ReactNode;
} & React.DOMAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className="p-4 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
    >
      {props.children}
    </button>
  );
}
