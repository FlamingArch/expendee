import { IconType } from "react-icons";

export default function Tab(props: {
  label: string;
  style: string;
  path?: string;
  icon?: IconType;
  trailing?: React.ReactNode;
}) {
  const Icon = props.icon;
  return (
    <div className="flex items-center gap-2">
      {Icon && <Icon className="h-6 w-6" />}
      <p className="flex-grow">{props.label}</p>
      {props.trailing && (
        <div className="text-text/80 text-sm">{props.trailing}</div>
      )}
    </div>
  );
}
