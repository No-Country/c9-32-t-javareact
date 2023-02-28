const Summary = () => {
  return (
    <div className="w-full divide-y-[1px]">
      <h2 className="heading3 text-center">Resumen de compra</h2>
      <div className="flex flex-col  w-full  p-3">
        <span className="opacity-60">Servicio</span>
        <span>Limpieza de hogar</span>
      </div>
      <div className="flex flex-col  w-full  p-3">
        <span className="opacity-60">Tipo de limpieza</span>
        <span>Simple</span>
      </div>
      <div className="flex flex-col  w-full  p-3">
        <span className="opacity-60">Tamaño de tu hogar</span>
        <span>Mediano (100m²)</span>
      </div>
      <div className="flex flex-col  w-full  p-3">
        <span className="opacity-60">Turno para la limpieza</span>
        <span>Mañana (de 8 a 12hs)</span>
      </div>
      <div className="flex flex-col  w-full  p-3">
        <span className="opacity-60">Frecuencia de limpieza</span>
        <span>Todos los días</span>
      </div>
      <div className="flex flex-col  w-full  p-3">
        <span className="opacity-60">Total a pagar - Servicio mensual</span>
        <span>$16.000</span>
      </div>
    </div>
  )
}
export default Summary