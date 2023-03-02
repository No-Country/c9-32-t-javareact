const Summary = () => {
  return (
    <div className="w-full divide-y-[1px] lg:self-start ">
      <h2 className="heading3 text-center">Resumen de compra</h2>
      <div className="flex flex-col  w-full  p-3">
        <span className="payment-label">Servicio</span>
        <span>Limpieza de hogar</span>
      </div>
      <div className="flex flex-col  w-full  p-3">
        <span className="opacity-60 text-customViolet">Tipo de limpieza</span>
        <span>Simple</span>
      </div>
      <div className="flex flex-col  w-full  p-3">
        <span className="opacity-60 text-customViolet">Tamaño de tu hogar</span>
        <span>Mediano (100m²)</span>
      </div>
      <div className="flex flex-col  w-full  p-3">
        <span className="opacity-60 text-customViolet">Turno para la limpieza</span>
        <span>Mañana (de 8 a 12hs)</span>
      </div>
      <div className="flex flex-col  w-full  p-3">
        <span className="opacity-60 text-customViolet">Frecuencia de limpieza</span>
        <span>Todos los días</span>
      </div>
      <div className="flex flex-col  w-full  p-3">
        <span className="opacity-60 text-customViolet">Total a pagar - Servicio mensual</span>
        <span>$16.000</span>
      </div>
    </div>
  )
}
export default Summary