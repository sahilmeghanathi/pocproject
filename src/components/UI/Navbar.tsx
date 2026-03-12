import ImageAtom from "../atoms/image";
import logo from "../../assets/simform.svg";
import LogoutComponent from "./LogoutComponent";

 const Navbar = () => {
   return (
     <nav className=" text-white p-4 mb-10!">
       <div className="w-full bg-white p-6 rounded-xl text-center flex flex-wrap justify-between">
         <ImageAtom className="h-12! mb-4!" src={logo} alt="Logo" preview={false} />
         <LogoutComponent />
       </div>
     </nav>
   );
 };

 export default Navbar;