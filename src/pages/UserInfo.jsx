import Button from "../components/button/Button";
import Card from "../components/card/Card";

import { useSelector } from 'react-redux'

const UserInfo = () => {
  const currentStatus = useSelector((state)=> state.user.status);
  const currentUser = useSelector((state)=> state.user.user)
  const currentCompany = useSelector((state) => state.company.company)
  console.log(currentStatus, currentUser, currentCompany)
  return (
    <div className="bg-Neutral-50 p-10">
      <div className="py-5">
        <h1 className="text-xl">Perfil de usuario</h1>
        <h2 className="text-gray-600">
          Esta es tu información personal y de tu empresa
        </h2>
      </div>
      <div className="flex flex-col space-y-4 ">
        {/* Información Personal */}
        <Card>
          <h2 className="text-lg  ">Información personal</h2>

          <div className="flex flex-col md:flex-row md:justify-between ">
            <div>
              <h3 className="text-sm text-gray-400">Nombre y apellido</h3>
              <h2>{currentUser.lastName} {currentUser.firstName}</h2>
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Número de contacto</h3>
              <h2>{currentUser.contact}</h2>
            </div>
          </div>
        </Card>
        {/* Información de la empresa */}
        <Card>
          <h2 className="text-lg  ">Información de la Empresa</h2>

          <div className="flex flex-col md:flex-row md:justify-between ">
            <div>
              <div>
                <h3 className="text-sm text-gray-400">Razón Social</h3>
                <h2>{currentCompany.razonSocial}</h2>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Domicilio</h3>
                <h2>{currentCompany.address}</h2>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-sm text-gray-400">Rut empresa</h3>
                <h2>{currentCompany.rutEmpresa}</h2>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Email</h3>
                <h2>{currentUser.email}</h2>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col md:flex-row md:justify-between ">
            <div>
              <h2 className="text-lg  ">Contraseña de la cuenta</h2>
            </div>
            <div>
              <Button>Cambiar contraseña</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserInfo;
