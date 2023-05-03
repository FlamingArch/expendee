type PageProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Page({ children, style }: PageProps) {
  return (
    <div
      style={style}
      className="bg-[#f2f3f6] dark:bg-black  dark:text-white dark:fill-white text-black border-r-[#ddd] dark:border-r-[#222] border-r flex flex-col h-full overflow-scroll"
    >
      {children}
    </div>
  );
}
