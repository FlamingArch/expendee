type TabBarItem = {
  label: string;
  icon?: (props: any) => React.ReactNode;
  secondaryLabel?: string;
  tag?: string;
};

type TabBarStyles =
  | "segmented"
  | "sidebar"
  | "sidebarGrouped"
  | "sidebarProminent"
  | "sidebarProminentGrouped";

type Props = {
  items: TabBarItem[];
  selected: number | string;
  onChange: (value: any) => void;
  type: TabBarStyles;
  className?: string;
};

const styles = {
  segmented: {
    base: "grid grid-flow-col w-full bg-accent/10 dark:bg-accent/25 rounded-xl",
    tab: "grow flex items-center w-auto text-accent rounded-xl text-sm text-center gap-3 cursor-pointer p-2",
    selected: "bg-accent text-white",
  },
  sidebar: {
    base: "grid gap-3 w-full rounded-xl text-white",
    tab: "grow flex items-center w-auto bg-accent-dimmed/20 rounded-xl text-sm gap-3 cursor-pointer p-3",
    selected: "bg-accent/100 text-white",
  },
  sidebarGrouped: {
    base: "grid w-full rounded-xl bg-accent-dimmed/20 text-white",
    tab: "grow flex items-center w-auto rounded-xl text-sm gap-3 cursor-pointer p-3",
    selected: "bg-accent/100 text-white",
  },
  sidebarProminent: {
    base: "grid gap-3 w-full rounded-xl text-white",
    tab: "grow flex items-center w-auto bg-accent-dimmed/20 rounded-xl text-sm gap-3 cursor-pointer p-3",
    selected: "bg-white text-black shadow-lg",
  },
  sidebarProminentGrouped: {
    base: "grid w-full bg-accent-dimmed/20 rounded-xl text-white",
    tab: "grow flex items-center w-auto rounded-xl text-sm gap-3 cursor-pointer p-3",
    selected: "bg-white text-black shadow-lg",
  },
};

export default function TabBar(props: Props) {
  return (
    <div className={`${styles[props.type].base} ${props.className}`}>
      {props.items &&
        props.items.map((item, index) => (
          <Tab
            type={props.type}
            key={item.tag ?? index}
            selected={(item.tag ?? index) === props.selected}
            label={item.label}
            secondaryLabel={item.secondaryLabel}
            icon={item.icon}
            onClick={() => props.onChange(item.tag ?? index)}
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
  type: TabBarStyles;
  secondaryLabel?: string;
};

function Tab(props: TabProps) {
  let selectedStyles = props.selected ? styles[props.type].selected : "";
  return (
    <div
      className={`${styles[props.type].tab} ${selectedStyles}`}
      onClick={props.onClick}
    >
      {props.icon && <props.icon />}
      <p className="flex-grow">{props.label}</p>
      {props.secondaryLabel && (
        <p className="text-xs opacity-80">{props.secondaryLabel}</p>
      )}
    </div>
  );
}
