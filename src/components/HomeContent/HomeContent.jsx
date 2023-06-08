// eslint-disable-next-line no-unused-vars
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import videoPrincipal from "../../assets/video/dashboard-xepelin.mp4";
import { cmp, dolar, flesan, formPay, fpAndfd, izquierdo, lineadecredito, mega, oclock, sacyr, wom, portatil, calendario, manoseguridad, zepelin } from '../../assets/images';
import Button from "../button/Button.jsx";
import Card from "../card/Card.jsx";
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"


const HomeContent = () => {

    const currentStatus = useSelector((state)=>state.user.status)
    //console.log(currentStatus)

    const backgroundTexto = {
        background: 'linear-gradient(56.45deg, #ff7d00 1.78%, #fc771c 16.06%, #f56565 51.07%, #ea4ad8 98.59%, #e640ff 104.65%)',
        backgroundClip: 'border-box',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
    <main className='w-full h-auto p-7 bg-Neutral-50'>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 py-5 my-[5rem] ">
            <section className="col-span-1">
                <h1 className='text-[2.5rem] lg:text-[3.5rem] font-bold'>
                    Plataforma de <span className="text-Naraja-xe">
                    soluciones financieras
                    </span> para toda empresa
                    
                </h1>
                <p className='mt-[1.5rem] text-[1.125rem] leading-7'>
                    <span className='font-bold'> Paga</span> tus cuentas, <span className='font-bold'> adelanta</span>  el pago de tus facturas y soluciona tus problemas de liquidez - en una sola plataforma <span className='font-bold'> 100% digital.</span> 
                </p>
                <div className='grid gap-3 grid-cols-1 md:grid-cols-2 pt-6'>
                    <div className='col-span-1'>
                        
                        {
                            currentStatus === "authenticated" ? (
                                <Link to ={"/payment"}>
                                    <button type="button" className=" w-full  text-white border border-purple-700 bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Comenzar Ahora</button>
                                </Link>
                            ) : (
                                <Link to ={"/login"}>
                                    <button type="button" className=" w-full  text-white border border-purple-700 bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Comenzar Ahora</button>
                                </Link>
                            )
                        }
                    </div>
                    <div className='col-span-1'>
                        <button type="button" className="w-full text-purple-700  border border-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Contactanos</button>
                    </div>
                </div>
            </section>
            <section className="col-span-1 flex justify-center items-center">
                <video src={videoPrincipal} autoPlay={true} loop className='shadow-slate-800'>
                </video>
            </section>
        </div>

        <div>
            <h2 className='text-center text-[#8d96b8] font-bold text-[1.25rem]'>
                Más de 20,000 empresas confían en el financiamiento de Xepelin
            </h2>

            

            <div className="my-8 py-8 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                <div className="col-span-1 flex items-center justify-center">
                    <img src={wom} alt='wom' />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                <img src={cmp} alt='cmp' />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                <img src={flesan} alt='flesan'/>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                <img src={sacyr} alt='sacyr' />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                <img src={izquierdo} alt='izquierdo' />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                <img src={mega} alt='mega' />
                </div>
            </div>
            
            <div className='w-full px-5 mx-auto'>
                <div className='flex flex-col md:flex-row justify-center items-center bg-white py-6 px-2 rounded-xl'>
                    <h2 className='my-2 mx-2'>
                    Explora nuestro producto:
                    </h2>
                    <p className='my-2 mx-2 font-bold'>Payments</p>
                    
                    {
                            currentStatus === "authenticated" ? (
                                <Link to ={"/payment"}>
                                    <Button>
                                        <div className='flex items-center justify-center'>
                                        <span className='mx-2'>Conoce mas.</span>
                                        <AiOutlineArrowRight/>
                                        </div>
                                    </Button>
                                </Link>
                            ) : (
                                <Link to ={"/login"}>
                                    <Button>
                                        <div className='flex items-center justify-center'>
                                        <span className='mx-2'>Conoce mas.</span>
                                        <AiOutlineArrowRight/>
                                        </div>
                                    </Button>
                                </Link>
                            )
                        }
                </div>
            </div>

            <div className='w-full p-5 mx-auto mt-10'>
                <div className=' bg-white p-[2rem] rounded-xl'>
                    <h2 style={backgroundTexto} className='font-bold text-[1.25rem]'>
                        Una plataforma de pago totalmente integral
                    </h2>
                    <h3 className='text-[2.5rem] font-bold my-[2rem]'>
                        Paga todas tus obligaciones en tiempo real
                    </h3>
                    <p className='text-[1.25rem] my-[4rem]'>
                        Con Payments dispersa tus pagos de manera gratuita, paga a tus proveedores, cumple con tus obligaciones y accede a financiamiento.
                    </p>
                    <div className='grid gap-3 grid-cols-1 md:grid-cols-3 pt-6'>
                    <div className='col-span-1'>
                        <Card>
                            <div>
                                <img src={oclock} alt='oclock'/>
                                <h2 className='font-bold'>
                                    Accede a financiamiento
                                </h2>
                                <p>
                                    Para pagar a tus proveedores de manera 100% digital, a través de la misma plataforma Xepelin.
                                </p>
                            </div>
                        </Card>
                    </div>

                    <div className='col-span-1'>
                        <Card>
                            <div>
                                <img src={formPay} alt='oclock'/>

                                <h2 className='font-bold'>
                                    Pago flexible
                                </h2>
                                <p>
                                    Elige pagar desde tu caja, accediendo a financiamiento o de forma mixta. 
                                </p>
                            </div>
                        </Card>
                    </div>

                    <div className='col-span-1'>
                        <Card>
                            <div>
                                <img src={dolar} alt='oclock'/>

                                <h2 className='font-bold'>
                                    Accede a financiamiento
                                </h2>
                                <p>
                                    Sincroniza tus cuentas por pagar y centraliza la información de tus proveedores en una sola plataforma.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
                </div>
            </div>

        </div>


        <div className='w-full p-5 mx-auto mt-2 rounded-xl'>
                    
                    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 pt-6'>
                    
                        <div className='col-span-1 bg-[#1d2856] p-10 rounded-2xl flex flex-col justify-between'>
                            <img src={lineadecredito} alt='lineaCredito' />
                            <button type="button" className="w-full bg-white text-purple-950  border border-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Contactanos</button>
                        </div>

                        <div className='col-span-1 bg-[#f06a92] p-10 rounded-2xl'>
                            <h3 className='font-bold mb-[2rem] text-[1.5rem] text-white'>
                                Haz uso del ecosistema Xepelin
                            </h3>

                            <p className='text-white mb-[2rem]'>
                                Adelanta el pago de tus facturas a través de nuestros productos Financiamiento Directo y Pronto Pago y accede a capital para pagar tus obligaciones a través de la misma plataforma.
                            </p>

                            <div>
                                <img src={fpAndfd} alt='forma de pago rapido' />
                            </div>
                        </div>
                    </div>
                
        </div>

        <div className='w-full p-5 mx-auto mt-2 rounded-xl'>
                    <h2 className='text-center text-[1.75rem] md:text-[2.5rem] font-[600] my-10'>
                        Una plataforma de pagos apalancada en tecnología
                    </h2>
                    <div className='grid gap-10 grid-cols-1 md:grid-cols-2 pt-6'>

                        <div className='col-span-1'>
                            <Card>
                                <div className='p-8 rounded-2xl'>
                                    <div className=''>
                                        <img src={portatil} alt='oclock' className='mx-1'/>
                                        <h2 className='font-bold text-[1.75rem] mx-1'>
                                            Servicio 100% Digital
                                        </h2>
                                    </div>
                                    <p className='mt-2'>
                                        Regístrate, vincula tu empresa y opera, todo sin trámites presenciales y a través de una sola plataforma digital.
                                    </p>
                                    
                                </div>
                            </Card>
                        </div>

                        <div className='col-span-1'>
                            <Card>
                                <div className='p-8 rounded-2xl'>
                                    <div className=''>
                                        <img src={calendario} alt='calendario' className='mx-1'/>
                                        <h2 className='font-bold text-[1.75rem] mx-1'>
                                            Aprobación inmediata
                                        </h2>
                                    </div>
                                    <p className='mt-2'>
                                        Nuestro modelo de Inteligencia Artificial evalúa en minutos tu solicitud.
                                    </p>
                                    
                                </div>
                            </Card>
                        </div>

                        <div className='col-span-1'>
                            <Card>
                                <div className='p-8 rounded-2xl'>
                                    <div className=''>
                                        <img src={manoseguridad} alt='manoseguridad' className='mx-1'/>
                                        <h2 className='font-bold text-[1.75rem] mx-1'>
                                        Proceso 100% seguro
                                        </h2>
                                    </div>
                                    <p className='mt-2'>
                                        Regístrate, vincula tu empresa y opera, todo sin trámites presenciales y a través de una sola plataforma digital.
                                    </p>
                                    
                                </div>
                            </Card>
                        </div>

                        <div className='col-span-1'>
                            <Card>
                                <div className='p-8 rounded-2xl'>
                                    <div className=''>
                                        <img src={oclock} alt='oclock' className='mx-1'/>
                                        <h2 className='font-bold text-[1.75rem] mx-1'>
                                            Financiamiento en 24 hrs
                                        </h2>
                                    </div>
                                    <p className='mt-2'>
                                        Nuestra tecnología  te permite registrarte en Xepelin,  solicitar y obtener el capital dentro del mismo día.
                                    </p>
                                    
                                </div>
                            </Card>
                        </div>
                        
                    </div>
                
        </div>

        <div className='w-full hs-screen py-5'>
            <div className='flex justify-center items-center'>
                <img src={zepelin} alt='zepelin' className='w-[7rem] '/>
            </div>
            <h2 className='text-[1.5rem] md:text-[2.5rem] text-center font-bold'>
                Empieza en minutos
            </h2>
            <div className='text-center my-5'>
                <Button>
                    Conoce mas
                </Button>

                <p className='my-5'>
                    ¿Ya tienes cuenta?  <span className='underline underline-offset-2 mx-2'>
                    Ingresa aquí
                    </span>
                </p>
            </div>
        </div>
    </main>
    )
}


export default HomeContent;