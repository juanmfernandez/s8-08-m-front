import { useSelector } from "react-redux";
import { analized, informationmoney, payment } from "../../assets/images";
import { AiOutlineArrowRight } from "react-icons/ai";

const Menu = () => {
    const user = useSelector((state)=> state.user.user)
    console.log(user)
  return (
    <div className="w-full h-auto bg-neutral-100">
      <div className="flex flex-col">
        <div className="px-20 pt-14 pb-7 flex sm:justify-center">
          <h2 className="text-2xl font-medium">
            Hola Bienvenido, <span className="font-bold text-3xl">{user?.firstName}</span>
          </h2>
        </div>

        <hr className="border-t border-r border-l border-gray-300 my-4 mb-4" />
        <div className="flex flex-col gap-8 mt-4 p-4 sm:flex-row mb-10">
          <div className="flex flex-col w-full sm:w-1/2 p-4 bg-white rounded-2xl">
            <div>
              <img
                className="w-full"
                src={analized}
                alt="informacion empresa"
              />
              <h2 className="font-medium text-xl hover:underline mt-8 flex flex-row gap-2 items-center">
                Informacion Empresarial <AiOutlineArrowRight />
              </h2>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 p-4 bg-white rounded-2xl">
            <img src={informationmoney} alt="informacion financiera" />
            <h2 className="font-medium text-xl hover:underline mt-8 flex flex-row gap-2 items-center">
              Informacion Financiera <AiOutlineArrowRight />
            </h2>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 p-4 bg-white rounded-2xl">
            <img src={payment} alt="informacion financiera" />
            <h2 className="font-medium text-xl hover:underline mt-8 flex flex-row gap-2 items-center">
              Payments <AiOutlineArrowRight />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
