import { grupo, zepelin } from '../../assets/images'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { onLogout } from '../../Redux/auth/authSlice'
import { useNavigate } from 'react-router-dom';
import { Avatar, Dropdown } from 'flowbite-react'

const NavBar = () => {
  const currentStatus = useSelector((state)=> state.user.status);
  const currerntUser = useSelector((state)=> state.user.user)
  console.log(currentStatus, currerntUser)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logOut =()=>{
    dispatch(onLogout());
    navigate("/")
  }

  return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center">
          <img src={zepelin} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Zepellin</span>
        </Link>
        

        {
          currentStatus !== "authenticated"  && (
            <div className="flex md:order-2" id='buttons-login-register'>
              <Link to={"/register"}>
                <button type="button" className="text-black mx-2  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
              </Link>
              <Link to={"/login"}>
                <button type="button" className="text-white bg-Primary-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
              </Link>
              
            </div>
          )
        }

        {
          currentStatus === "authenticated" && (
            <div className="flex items-center">
                <Dropdown
                  inline
                  label={<Avatar alt="User settings" img={grupo}/>}
                >
                  <Dropdown.Header>
                    <span className="block text-sm">
                    {currerntUser.firstName}
                    </span>
                    <span className="block truncate text-sm font-medium">
                    {currerntUser.email}
                    </span>
                  </Dropdown.Header>
                    <Link to={"/dashboard"} className="block  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <Dropdown.Item>
                        Panel De Control
                      </Dropdown.Item>
                    </Link>
                  <Link to={"/profile"} className="block  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <Dropdown.Item>
                      Perfil
                    </Dropdown.Item>
                  </Link>                  
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={()=>logOut()}>
                    <button className="block text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white" id='logout'>
                      Salir
                    </button>
                  </Dropdown.Item>
                </Dropdown>
            </div>
            
          )
        }
        </div>
      </nav>

  )
}
export default NavBar