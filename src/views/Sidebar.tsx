import { motion } from "framer-motion";

type ViewProps = {
  children: React.ReactNode;
  width?: React.CSSProperties["width"];
  className?: string;
};

type HeaderProps = {
  heading: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
};

function View({ children, width, className }: ViewProps) {
  return (
    <motion.div
      animate={{ width: width }}
      exit={{ width: "0" }}
      style={{ width: 0 }}
      className="items-end bg-black dark:border-r-[#222] dark:border-r"
    >
      <div
        style={{ minWidth: width }}
        className={"flex flex-col overflow-scroll h-full " + className}
      >
        {children}
      </div>
    </motion.div>
  );
}

function Section({ heading, actions, children }: HeaderProps) {
  return (
    <div className="flex flex-col p-6 gap-4">
      <div className="flex justify-between items-center">
        <p className="font-bold uppercase">{heading}</p>
        <div className="flex gap-6">{actions}</div>
      </div>
      {children}
    </div>
  );
}

const Sidebar = { View, Section };

export default Sidebar;
