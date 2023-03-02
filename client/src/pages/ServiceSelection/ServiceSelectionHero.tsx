interface IServiceHero{
  title:string
  text:string
}

const ServiceSelectionHero = ({title, text}:IServiceHero) => {
  return (
    <div>
      
      <h2 className="heading2 mb-1">{title}</h2>
          <p className="">{text}</p>
    </div>
  )
}
export default ServiceSelectionHero