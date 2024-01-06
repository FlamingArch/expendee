"use client"

// import Link from "next/link"

type ButtonProps = {
  icon?: React.ReactNode,
  label?: String | React.ReactNode
  href?: string
  onClick: VoidFunction
}

// .button - secondary {
//   @apply bg-accent bg-opacity-15 hover:bg-opacity-20 transition-colors rounded-xl p-4 text-accent font-bold text-center;
// }

// .button - primary {
//   @apply bg - accent hover: bg - accentDark rounded - xl p - 4 text - white font - bold text - center;
// }

// .button - socials {
//   @apply rounded - xl w - full aspect - square grid place - content - center text - center;
// }

// function ButtonPrimary(props: ButtonProps) {
//   if (props.href) {
//     return <Link href={props.href} className="button-primary">{props.icon} {props.label}</Link>
//   }
//   return <button className="button-primary" onClick={props.onClick}>{props.icon} {props.label}</button>
// }

// function ButtonSecondary(props: ButtonProps) {
//   if (props.href) {
//     return <Link href={props.href} className="button-secondary">{props.icon} {props.label}</Link>
//   }
//   return <button className="button-secondary" onClick={props.onClick}>{props.icon} {props.label}</button>
// }

// const Button = {
//   Primary: ButtonPrimary,
//   Secondary: ButtonSecondary
// }

// export default Button

export default function Button(props: ButtonProps) {
  return <button className="button-primary" onClick={props.onClick}>{props.icon} {props.label}</button>
}
