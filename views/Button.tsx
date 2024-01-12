import Link from "next/link"

type ButtonProps = {
  primary?: boolean
  icon?: React.ReactNode,
  label?: String | React.ReactNode
  href?: string
  onClick?: VoidFunction
}

export default function Button(props: ButtonProps) {
  let buttonStyles = ""
    + "bg-accent rounded-xl "
    + "p-4 "
    + "text-center cursor-pointer "

  if (props.primary) {
    buttonStyles += ""
      + "text-white "
      + "hover:bg-accentDark hover:shadow-xl hover:shadow-accentTransparent "
      + "transition-shadow transition-colors "
  } else {
    buttonStyles += ""
      + "text-accent bg-opacity-10 "
      + "hover:bg-opacity-20 "
  }

  if (props.href) {
    return <Link className={buttonStyles} href={props.href}>
      {props.icon} {props.label}
    </Link>
  }

  return (
    <button className={buttonStyles} onClick={props.onClick}>
      {props.icon} {props.label}
    </button>
  )
}
