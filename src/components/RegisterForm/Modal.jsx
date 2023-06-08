import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { deleteinforegister, registeruser } from "../../Redux/auth/authSlice";
import { IconContext } from "react-icons";
import { FaSpinner } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, formValues }) => {
  console.log(formValues, "formikValues");
  const navigate = useNavigate();
  const loading = useSelector((state) => state.user.statusRegister);
  const failureRegister = useSelector((state) => state.user.registerMessage);
  console.log(loading, "loading");
  const dispatch = useDispatch();
  useEffect(() => {
    if (loading === "registered") {
      navigate("/profile");
    }
    if (failureRegister !== undefined) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${failureRegister}`,
      });
      dispatch(deleteinforegister());
    }
  });
  useEffect(() => {
    return () => {
      if (loading === "checking") {
        dispatch(deleteinforegister());
      }
    };
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (values) => {
    console.log(formValues, "valores de formik values");
    console.log(values, "values");
    const combinedValues = {
      ...formValues,
      ...values,
    };
    console.log(combinedValues, "combined");
    dispatch(registeruser(combinedValues));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-6 z-10">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <Formik
            initialValues={{
              contact: "",
              rutEmpresa: "",
              razonSocial: "",
              nombreCompleto: "",
              address: "",
            }}
          >
            {({ isSubmitting, values }) => (
              <Form>
                <div className="p-4 ">
                  <div className="text-2xl font-semibold mb-4 text-center">
                    Finaliza tu registro
                  </div>
                  <div className="text-center">
                    completa la informacion solicitada para completar tu perfil
                    y solicitar financiamientos
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col">
                      <label htmlFor="contact">Telefono</label>
                      <Field
                        type="text"
                        name="contact"
                        required
                        className="mt-2 py-2 px-4 rounded-lg border border-zinc-400"
                        placeholder="Ingresa tunúmero de teléfono"
                      />
                      <ErrorMessage name="contact" component="div" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="rutEmpresa">RUT Empresa</label>
                      <Field
                        type="text"
                        name="rutEmpresa"
                        required
                        className="mt-2 py-2 px-4 rounded-lg border border-zinc-400"
                        placeholder="Ingresa el RUT de tu empresa"
                      />
                      <ErrorMessage name="rutEmpresa" component="div" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="razonSocial">Razón Social</label>
                      <Field
                        type="text"
                        name="razonSocial"
                        required
                        className="mt-2 py-2 px-4 rounded-lg border border-zinc-400"
                        placeholder="Ingresa la razón social de tu empresa"
                      />
                      <ErrorMessage name="razonSocial" component="div" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="nombreCompleto">Nombre Completo</label>
                      <Field
                        type="text"
                        name="nombreCompleto"
                        required
                        className="mt-2 py-2 px-4 rounded-lg border border-zinc-400"
                        placeholder="Ingresa tu nombre completo"
                      />
                      <ErrorMessage name="nombreCompleto" component="div" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address">Direccion</label>
                      <Field
                        type="text"
                        name="address"
                        required
                        className="mt-2 py-2 px-4 rounded-lg border border-zinc-400"
                        placeholder="Ingresa tu Direccion"
                      />
                      <ErrorMessage name="address" component="div" />
                    </div>
                    <button
                      type="button"
                      className="mt-5 py-4  w-full bg-Primary-100 rounded-lg text-xl text-white font-semibold"
                      disabled={isSubmitting || loading === "checking"}
                      onClick={() => handleSubmit(values)}
                    >
                      {loading === "checking" ? (
                        <div className="flex justify-center items-center h-full">
                          <IconContext.Provider
                            value={{ className: "spinner-icon animate-spin" }}
                          >
                            <FaSpinner />
                          </IconContext.Provider>
                        </div>
                      ) : (
                        "Finalizar Registro"
                      )}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Modal;
