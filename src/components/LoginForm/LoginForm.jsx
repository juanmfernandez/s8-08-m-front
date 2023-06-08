import { ErrorMessage, Field, Form, Formik} from "formik";
import { useEffect, useState } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import * as Yup from "yup";
import { loginuser, onLogout } from "../../Redux/auth/authSlice";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

const required = "* Campo obligatorio";
const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required(required),
  password: Yup.string()
    .min(8, "Debe contener al menos 8 caracteres de largo")
    .required(required)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, numeros y un carácter especial"
    )
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state)=>state.user.user)
  const currentStatus = useSelector((state)=> state.user.status);
  const failedLogin = useSelector((state)=> state.user.errorMessage)
  console.log( currentUser)

  function LoaderComponent() {
    return (
      <div className="flex justify-center items-center h-screen">
              <div role="status">
          <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
      </div>
      </div>
    );
  }

  const loginUser = async (values) => {
    const data = {...values};
    dispatch(loginuser(data))
  }
  
  useEffect(()=>{

    if(currentStatus === "authenticated"){
      navigate("/");
    }

    if(failedLogin !== undefined){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${failedLogin}`,
      })
      dispatch(onLogout())
    }

  });
  useEffect(() => {
    return () => {
      if (currentStatus === "checking") {
        dispatch(onLogout());
      }
    };
  }, []);

  return (
    <div className="bg-Blanco">
      {
        currentStatus === "checking" ? (
          <LoaderComponent/>
        ) : (
          <div className="md:w-1/3 md:mx-auto">
        <div className="flex justify-center pt-24 pb-4">
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            className=" text-black bg-Blanco border border-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            A
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div
            id="dropdownDivider"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Chile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Mexico
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center font-bold text-5xl leading-normal">
          Ingresa al Ecosistema Xepelin
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            loginUser(values);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="bg-Blanco">
              <div className="p-4">
                <div className="flex flex-col mt-7">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="text"
                    name="email"
                    required
                    className="mt-1 mb-3 py-4 px-4 rounded-lg border-zinc-400 text-lg"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col mt-4 mb-4">
                  <label htmlFor="passwod">Contraseña</label>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      className="w-full mt-1 py-4 px-4 rounded-lg border border-zinc-400 text-lg"
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-7 mb-6 w-full py-4 rounded-lg text-Blanco bg-Primary-100 text-2xl font-semibold"
                >
                  Ingresar
                </button>
                <div className="text-center text-lg mb-4 ">
                  ¿Todavia no tienes cuenta?{" "}
                  <span className="underline text-Primary-100">Registrate</span>
                </div>
                <div className="text-Primary-100 text-center  text-lg underline mb-6 mt-4">
                  Recuperar acceso a mi cuenta
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
        )
      }
      
    </div>
  );
};
export default LoginForm;