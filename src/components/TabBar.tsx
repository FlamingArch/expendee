type TabBarItem = {
  label: string;
  icon?: (props: any) => React.ReactNode;
};

type Props = {
  items: TabBarItem[];
  selected: number;
  onChange: (index: number) => void;
  className?: string;
};

export default function TabBar(props: Props) {
  return (
    <div
      className={`grid grid-flow-col w-full bg-accent/10 rounded-xl ${props.className}`}
    >
      {props.items &&
        props.items.map((item, index) => (
          <Tab
            key={index}
            selected={index === props.selected}
            label={item.label}
            icon={item.icon}
            onClick={() => props.onChange(index)}
          />
        ))}
    </div>
  );
}

type TabProps = {
  selected: boolean;
  onClick: () => void;
  label: string;
  icon?: (props: any) => React.ReactNode;
};

function Tab(props: TabProps) {
  let selectedStyles = props.selected ? "bg-accent text-white rounded-xl" : "";
  return (
    <div
      className={`grow flex items-center w-auto text-accent text-sm cursor-pointer p-2 ${selectedStyles}`}
      onClick={props.onClick}
    >
      {props.icon && <props.icon />}
      <p className="flex-grow text-center">{props.label}</p>
    </div>
  );
}
