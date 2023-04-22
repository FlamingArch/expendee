import { motion } from "framer-motion";

type ViewProps = {
  children: React.ReactNode;
  width?: React.CSSProperties["width"];
};

type HeaderProps = {
  heading: string;
  children?: React.ReactNode;
};

function View({ children, width }: ViewProps) {
  return (
    <motion.div
      animate={{ width: width }}
      exit={{ width: "0" }}
      style={{ width: 0 }}
      className="flex flex-col items-end"
    >
      <div style={{ minWidth: width }}>{children}</div>
    </motion.div>
  );
}

function Header({ heading, children }: HeaderProps) {
  return (
    <div className="flex justify-between items-center p-6">
      <p className="font-bold uppercase">{heading}</p>
      <div className="flex gap-6">{children}</div>
    </div>
  );
}

const Sidebar = { View, Header };

export default Sidebar;
