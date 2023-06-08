import FacturasAPagar from "../components/Payment/FacturasAPagar";
import MisNominas from "../components/Payment/MisNominas";
import Payments from "../components/Payment/Payments";
import Performance from "../components/Payment/Performance";

const Payment = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full bg-Neutral-50 p-8">
      <div className="flex flex-col">
        <FacturasAPagar />
      </div>
      <div className="flex flex-col">
        <Payments />
      </div>
      <div className="flex flex-col">
        <Performance />
      </div>
      <div className="flex flex-col">
        <MisNominas />
      </div>
    </div>
  );
};

export default Payment;
