import {
  mision_img_group,
  gastos_finanzas,
  acceslimit,
  todolist,
} from "../assets/images";
const Mision = () => {
  return (
    <div className="p-5 bg-Blanco ">
      <div className="flex flex-col sm:w-2/4 sm:mx-auto sm:mt-20 sm:mb-10">
        <div className="font-semibold text-4xl">Nuestra mision es otorgar</div>
        <div className="font-semibold text-4xl text-Naraja-xe mb-10">
          servicios financieros para todas las empresas
        </div>
        <div className="flex flex-col sm:flex-row-reverse gap-10 items-center">
          <img src={mision_img_group} alt="" className="rounded-3xl sm:w-3/5 sm:h-3/4" />
          <div>
            <div>
              <div className="mt-5 text-xl">
                Somos una empresa de tecnología que otorga{" "}
                <span className="font-semibold">servicios financieros</span> a
                través de una{" "}
                <span className="font-semibold">plataforma digital</span>.
                Empresas de todos los tamaños, desde PYMEs hasta compañías
                públicas, usan nuestro software para ejecutar pagos, financiarse
                y manejar su caja.
              </div>
              <button className="bg-Primary-100 text-Blanco  px-4 py-4 w-full rounded-xl mt-8 font-medium">
                Registrates
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6 sm:mt-14">
          <div className="bg-white rounded-2xl p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
                <div className="flex flex-col">
                <div className="font-semibold text-4xl">
                Las PYMES estan desatendidas
              </div>
              <div className="font-medium text-3xl text-Naraja-xe">
                en capital y servicios financieros
              </div>
              <div className="mt-5 text-xl">
                El 95% de las PYMEs en LatAm no logran acceder a servicios
                financieros recurrentes, a pesar de representar el 90% de todas
                las empresas en la región.
              </div>
              <div>
              <button className="mt-3 font-medium hover:underline md:text-xl">
                Acceder a financioamiento{" "}
              </button>
              </div>
                </div>
              
              
              <img src={gastos_finanzas} alt="" className="w-full" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mb-16">
          <div className="bg-Azul-mision rounded-2xl p-5 mt-8">
            <img src={acceslimit} alt="Acceso limitado" className="w-72 h-80 mx-auto" />
            <div className="text-Blanco mt-5">
              <div className="mb-2 font-bold text-2xl">Acceso limitado</div>
              <div className="mt-3 text-lg">
                Los agentes financieros tradicionales se enfocan primordialmente
                en empresas de gran tamaño.
              </div>
            </div>
          </div>
          <div className="bg-Violeta-xe mt-8 rounded-2xl p-6">
            <img src={todolist} alt="Experiencia analoga" className="w-72 h-80 mx-auto" />
            <div className="text-Blanco mt-4">
              <div className="font-bold text-2xl">Experiencia analoga</div>
              <div className="text-lg mt-6">
                Los servicios tradicionales se encuentra obsoletos, no haciendo
                uso de la data disponible.
              </div>
            </div>
          </div>
          </div>
  
        </div>
      </div>
    </div>
  );
};
export default Mision;
