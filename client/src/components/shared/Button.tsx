import { IButton } from "@/types"


export const Button = ({text, customClass}:IButton) => {
  return (
    <div className={`button  ${customClass}`}>{text}</div>
  )
}