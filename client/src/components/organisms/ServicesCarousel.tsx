import { Service } from "../molecules/Service"
import data from '../../utils/data.json'
import { IService } from "@/types"

const ServicesCarousel = () => {

    const services  = data.services
  return (
    <section>
      


      {
        services.map( (service:IService,i) => {
          return (
            <Service key={i} src={service.src} serviceType={service.serviceType} description={service.description} alt={service.alt}/>
          )
        })
      }

    </section>
  )
}
export default ServicesCarousel