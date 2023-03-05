
interface IToggleButton{
  text:string
  action?: () => void;
  customClass?:string
}

export const ServiceToggleButton = ({text, action,customClass}:IToggleButton) => {
  return (
    <div onClick={action} className={`button-custom mb-2 ${customClass}`}>{text}</div>
  )
}