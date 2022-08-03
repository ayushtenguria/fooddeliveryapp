/**Modules import */
import {MdShoppingBasket} from "react-icons/md"
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
import {userStateValue } from "../Context/stateProvider"
import {actionType} from "../Context/reducer"


/**Static Files */
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png"

/** Functional Componetns */
import {app} from "../firebase.config"; 


export default function Header(){

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = userStateValue();

    const login = async () => {
            // const response = await signInWithPopup(firebaseAuth, provider);
            // console.log(response);
       if(!user){
        const {
            user: {refreshToken, providerData}
        } = await signInWithPopup(firebaseAuth, provider);
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]))
       }
    };


    return(
        <header className="w-screen fixed  z-50 p-5 px-16 ">
          {/*Desktop and Tablet menu  */}
          <div className="hidden md:flex justify-between h-full p-4">
              <Link to={"/"} className="flex items-center gap-2 ">
                  <img src={Logo} className="w-10 object-cover" alt="logo"/>
                  <p className="text-headingColor text-xl font-bold">City</p>
              </Link>
            <ul className="flex gap-8 item-center ml-auto ">
                <li className="tet-base text-textColor hover:text-headingColor duration-300 transition-all ease-in-out cursor-pointer">Home</li>
                <li className="tet-base text-textColor hover:text-headingColor duration-300 transition-all ease-in-out cursor-pointer">Menu</li>
                <li className="tet-base text-textColor hover:text-headingColor duration-300 transition-all ease-in-out cursor-pointer">About Us</li>
                <li className="tet-base text-textColor hover:text-headingColor duration-300 transition-all ease-in-out cursor-pointer">Service</li>
            </ul>

            <div className="flex items-center justify-center">
                  <MdShoppingBasket className="text-textColor text-2xl ml-8 -mt-5 cursor-pointer"/>
                  <div className=" absolute  w-5 h-5 round-full bg-red-500 flex items-center justify-center">
                      <p className="text-xs text-white font-semibold">2</p>
                  </div>
            </div>

            <div className="relative">

                <motion.img 
                whileTap={{scale:0.6}} 
                src={user ? user.photoUrl : Avatar} 
                className="w-10 h-10 min-w-[40px] min-h-[40px] ml-4 cursor-pointer"
                alt="userImage"     
                onClick={login}           
                />

            </div>

          </div>

          {/*Mobile  */}
          <div className="flex md:hidden bg-blue-500 h-full p-4"></div>
        </header>
    )
}