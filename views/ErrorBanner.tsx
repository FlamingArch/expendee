import _ from "lodash"

type ErrorProps = {
  error?: string
  prominent?: boolean
}

export default function ErrorBanner(props: ErrorProps) {
  let styles = ""
    + "bg-red-600 text-white "
    + "rounded-xl + p-2 "

  if (props.prominent) {
    styles = styles
      + "shadow-2xl shadow-red-600 "
      + "text-white "
  } else {
    styles += "bg-opacity-10 text-red-600 "
  }

  if (!props.error) return null

  return (
    <p className={styles}><b>ERROR:</b> {_.startCase(props.error)}</p>
  )
}
