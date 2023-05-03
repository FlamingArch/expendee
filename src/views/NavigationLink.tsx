import Button from "./Button";
import { IconProps } from "./Icons";

type NavigationLinkProps = {
  Icon: React.FunctionComponent<IconProps>;
  label: string;
  to: string;
  className?: string;
};

export default function NavigationLink({
  Icon,
  label,
  className,
  to,
}: NavigationLinkProps) {
  return (
    <Button
      className={className}
      buttonStyle="navigation"
      Icon={Icon}
      label={label}
    />
  );
}
