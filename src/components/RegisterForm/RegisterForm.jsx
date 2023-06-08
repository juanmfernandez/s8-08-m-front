import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { FaCity } from "react-icons/fa";
import Modal from "./Modal";
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [formValuesData, setFormValues] = useState(null);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, numeros y un carácter especial"
      )
      .required("La contraseña es requerida"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("La confirmación de contraseña es requerida"),
  });

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const openmodal = async (values) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const { confirmPassword, ...formValuesWithoutConfirmPassword } = values;
      await validationSchema.validate(values, { abortEarly: false });
      setShowModal(true);
      setFormValues(formValuesWithoutConfirmPassword);
    } catch (error) {
      // Manejar el error de validación de la clave aquí
      console.error("error");
    }
  };
  const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          soluciones: [],
          tipoOrganizacion: "",
          firstName: "",
          lastName: "",
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, values }) => (
          <Form>
            {currentPage === 1 && (
              <div className="p-4 sm:w-3/4 sm:mx-auto md:w-1/3 md:mx-auto">
                <div className="text-Primary-50 text-center pt-8 pb-8 font-medium">
                  Paso 1 de 3
                </div>

                <div className="text-center text-2xl pt-3 pb-3 font-semibold">
                  Cuentanos, ¿que soluciones buscas para tu empresa ?
                </div>
                <div className="text-center text-xs">
                  Puedes Seleccionar mas de una
                </div>
                <div className="flex flex-col mt-3 gap-y-4">
                  <div className="flex  items-center px-4 py-4 bg-Blanco  border border-gray-500 rounded dark:border-gray-700">
                    <Field
                      type="checkbox"
                      name="soluciones"
                      value="gestionar-flujo"
                    />
                    <label className="ml-2">Gestionar tu flujo de caja</label>
                  </div>
                  <div className="flex  items-center px-4 py-4 bg-Blanco  border border-gray-500 rounded dark:border-gray-700">
                    <Field
                      type="checkbox"
                      name="soluciones"
                      value="financiar-pagos"
                    />
                    <label className="ml-2">
                      Financiar y programar tus pagos
                    </label>
                  </div>
                  <div className="flex  items-center px-4 py-4 bg-Blanco  border border-gray-500 rounded dark:border-gray-700">
                    <Field
                      type="checkbox"
                      name="soluciones"
                      value="adelantar-cobro"
                    />
                    <label className="ml-2">
                      Adelantar el cobro de tus facturas
                    </label>
                  </div>
                  <ErrorMessage name="soluciones" component="div" />
                  <div className="flex  items-center px-4 py-4 bg-Blanco  border border-gray-500 rounded dark:border-gray-700">
                    <Field type="checkbox" name="soluciones" value="otra" />
                    <label className="ml-2">Otra</label>
                  </div>
                  <ErrorMessage name="otra" component="div" />
                </div>

                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleNext}
                  className="mt-10 mb-5 py-4  w-full bg-Primary-100 rounded-lg text-xl text-white font-semibold"
                >
                  Siguiente
                </button>
                <div className="text-center mt-5 mb-10">
                  ¿Ya tienes una cuenta?{" "}
                  <span className="text-Primary-100 underline">
                    Inicia sesion aqui
                  </span>
                </div>

                <div className="text-center mt-10 mb-10">
                  Al registrarte estas aceptando los{" "}
                  <span className="font-semibold">
                    Terminos y Condiciones y Politicas de Privacidad
                  </span>
                </div>
              </div>
            )}
            {currentPage === 2 && (
              <div className="p-4  md:w-1/3 md:mx-auto">
                <div className="text-Primary-50 text-center pt-8 pb-8 font-medium">
                  Paso 2 de 3
                </div>
                <div className="text-center text-2xl pt-3 pb-3 font-semibold">
                  ¿Cual es total de venta anual de tu organizacion ?
                </div>

                <div className="flex flex-row mt-3">
                  <div className="flex flex-col m-4 w-1/2 items-center px-4 py-2 bg-Blanco  border border-gray-500 rounded dark:border-gray-700">
                    <FaCity size={60} />
                    <label>Empresa</label>
                    <label className="text-center">
                      (Menos de $3.2 Mil Millones)
                    </label>
                    <Field
                      type="checkbox"
                      name="tipoOrganizacion"
                      value="empresa"
                      className="rounded-full h-5 w-5"
                    />
                  </div>
                  <div className="flex flex-col m-4 w-1/2 items-center px-4 py-2 bg-Blanco  border border-gray-500 rounded dark:border-gray-700">
                    <FaCity size={60} />
                    <label>Corporativo</label>
                    <label className="text-center">
                      (Mas de $3.2 Mil Millones)
                    </label>
                    <Field
                      type="checkbox"
                      name="tipoOrganizacion"
                      value="corporativo"
                      className="rounded-full h-5 w-5"
                    />
                  </div>
                  <ErrorMessage name="tipoOrganizacion" component="div" />
                </div>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="mt-3 py-4 w-full text-Primary-100 text-lg font-bold bg-Neutral-50 rounded-lg mb-10"
                >
                  Atras
                </button>

                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleNext}
                  className="mt-3 py-4  w-full bg-Primary-100 rounded-lg text-xl text-Blanco font-semibold"
                >
                  Siguiente
                </button>

                <div className="text-center mt-10 mb-10">
                  Al registrarte estas aceptando los{" "}
                  <span className="font-semibold">
                    Terminos y Condiciones y Politicas de Privacidad
                  </span>
                </div>
              </div>
            )}
            {currentPage === 3 && (
              <div className="p-4 sm:w-3/4 sm:mx-auto md:w-1/3 md:mx-auto">
                <div className="text-Primary-50 text-center pt-8 pb-8 font-medium">
                  Paso 3 de 3
                </div>
                <div className="text-center text-2xl pt-3 pb-3 font-semibold">
                  Crear Cuenta
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="firstName">Nombre</label>
                  <Field
                    type="text"
                    name="firstName"
                    required
                    className="mt-2 py-4 px-4 rounded-lg border border-zinc-400"
                    placeholder="Ingresa Nombre"
                  />
                  <ErrorMessage name="firstName" component="div" />
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="lastName">Apellido</label>
                  <Field
                    type="text"
                    name="lastName"
                    required
                    className="mt-2 py-4 px-4 rounded-lg border border-zinc-400"
                    placeholder="Ingresa Apellido"
                  />
                  <ErrorMessage name="lastName" component="div" />
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="email">Correo Electronico</label>
                  <Field
                    type="text"
                    name="email"
                    required
                    className="mt-2 py-4 px-4 rounded-lg border border-zinc-400"
                    placeholder="Ingresa correo de empresa"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="flex flex-col mt-4">
                  <label htmlFor="passwod">Crear Contraseña</label>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      className="w-full mt-2 py-4 px-4 rounded-lg border border-zinc-400"
                      placeholder="Ingresa contraseña"
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-7"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                    </button>
                  </div>
                  <ErrorMessage name="password" component="div" />
                </div>
                <div className="flex flex-col mt-4">
                  <label htmlFor="confirmPassword">
                    Vuelva a escrbir tu contraseña
                  </label>
                  <div className="relative">
                    <Field
                      type={showPassword1 ? "text" : "password"}
                      name="confirmPassword"
                      required
                      className="w-full mt-2 py-4 px-4 rounded-lg border border-zinc-400"
                      placeholder="Ingresa contraseña"
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-7"
                      onClick={() => setShowPassword1(!showPassword1)}
                    >
                      {showPassword1 ? <RiEyeCloseLine /> : <RiEyeLine />}
                    </button>
                  </div>
                  <ErrorMessage name="confirmPassword" component="div" />
                </div>
                <div>
                  <button className="text-Primary-100 font-medium text-center w-full mt-2 mb-2">
                    ¿Tienes una Invitacion?
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="mt-3 py-4 w-full text-Primary-100 text-lg font-bold bg-Neutral-50 rounded-lg mb-10"
                >
                  Atras
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => openmodal(values)}
                  className="mt-3 py-4 mb-6 w-full bg-Primary-100 rounded-lg text-xl text-white font-semibold"
                >
                  Siguiente
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
      {showModal ? (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          formValues={formValuesData}
        />
      ) : null}
    </div>
  );
};

export default RegisterForm;
