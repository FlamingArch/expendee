import { IconProps } from "./Icons";

type ViewProps = {
  children: React.ReactNode;
  width?: React.CSSProperties["width"];
};

type HeaderProps = {
  heading: string;
  children?: React.ReactNode;
};

type HeaderActionProps = {
  Icon: React.FunctionComponent<IconProps>;
  label: string;
  onClick: () => void;
};

function View({ children, width }: ViewProps) {
  return (
    <div style={{ width: width }} className="flex flex-col p-6 gap-6">
      {children}
    </div>
  );
}

function Header({ heading, children }: HeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <p className="font-bold uppercase">{heading}</p>
      <div className="flex gap-6">{children}</div>
    </div>
  );
}

const Sidebar = { View, Header };

export default Sidebar;
