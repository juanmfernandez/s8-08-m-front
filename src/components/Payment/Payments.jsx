import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { newPayment } from '../../Redux/auth/paymentSlice';

const Payments = () => {
  const currentUser = useSelector((state)=> state.user.user);
  const currentCompany = useSelector((state) => state.company.company);
  const currentPayments = useSelector((state) => state.payments.payment);
  const currentDataPay = useSelector((state) => state.paydata.paydata);
  const dispatch = useDispatch();
  
  const handleNewPayment = (values) => {
    dispatch(newPayment(values));
  };

  var values = {
    amount: currentDataPay.amount  || 0,
    interestRate : 20,
    paymentDeadline : "2024-08-30",
    employeeApplied :currentUser._id,
    company: currentCompany._id,
    invoices: currentDataPay.invoices
  }
  const totalAmount = currentPayments.reduce((accumulator, item) => accumulator + item.amount, 0);

  var currentTotalPaymentAmount = 0;
  currentTotalPaymentAmount = (totalAmount + values.amount);
  var percent = Math.round((currentTotalPaymentAmount * 100)/800000);

  return (
    <div className="bg-white w-full rounded-xl p-8">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl mt-4 mb-4">Payment</h1>
        <h3 className="text-2xl mt-3 mb-5">Linea de crédito para tu empresa {currentCompany.razonSocial}.</h3>
        <div className="flex flex-row justify-between mt-4 mb-10">
          <h1 className="text-Violeta-xe text-3xl sm:text-5xl font-bold">$800.000</h1>
        </div>
        <div className="flex flex-col p-8 border border-zinc-300 rounded-lg mt-4">
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-col">
              <h3 className="text-lg mb-2">Consumido</h3>
              <h2 className="font-bold text-xl">${ currentTotalPaymentAmount }</h2>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg mb-2">Disponible</h3>
              <h2 className="font-bold text-xl">${800000 - currentTotalPaymentAmount}</h2>
            </div>
          </div>
          <div className={`mt-4 mb-9 py-2 bg-Violeta-xe rounded-xl`} style={{width: `${percent}%`}}></div>
          {percent}%
        </div>
        <div className="flex flex-row justify-between mt-7 mb-6">
        </div>
        <button 
        type='submit'
        disabled = {values.amount === 0 ? (true) : (false)}
        onClick={() => handleNewPayment(values)}
        className="px-8 py-2 bg-Primary-100 rounded-lg text-Blanco text-xl hover:bg-Primary-50">
            {values.amount === 0 ? ("Selecciona algunas facturas para pagar") : ("Solicitar $"+values.amount)}
          </button>
      </div>
    </div>
    
  );
};

export default Payments;
