/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux';
import { Table } from "flowbite-react";
import { format } from "date-fns";

// eslint-disable-next-line react/prop-types
const MisNominas =()=>{
  const currentPayments = useSelector((state) => state.payments.payment);
  return(

    <div className="max-w-full overflow-x-auto">
      <h2 className="px-3 py-3 font-bold">
        Payments
      </h2>
      <Table className='text-sm text-gray-700 bg-Neutral-50'>
      <Table.Head className='text-sm text-gray-700 bg-Neutral-50'>
        <Table.HeadCell>
          Cantidad Facturas
        </Table.HeadCell>
        <Table.HeadCell>
          Interes
        </Table.HeadCell>
        <Table.HeadCell>
          Monto
        </Table.HeadCell>
        <Table.HeadCell>
          Fecha de pago
        </Table.HeadCell>

      </Table.Head>
      {currentPayments != null &&
          currentPayments.map((payment, i) => {
            return(
              <Table.Body className="divide-y" key={i}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {payment.invoices.length} 
                </Table.Cell>
                <Table.Cell>
                {payment.interestRate} %
                </Table.Cell>
                <Table.Cell>
                  ${payment.amount}
                </Table.Cell>
                <Table.Cell>
                  {format(new Date(payment.paymentDeadline), 'dd-MM-yyyy - hh:mm')}
                </Table.Cell>
              </Table.Row>                        
            </Table.Body>
            )
          }
        )}
    </Table>
    </div>
  )
}

export default MisNominas;
