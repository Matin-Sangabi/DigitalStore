import { Link } from "react-router-dom";
const LogoIcon = () => {
    return ( 
        <Link to="/">
            <img
              src={"/images/Apple Logo PNG Vector (AI) Free Download.png"}
              className="w-10 h-10 object-cover block"
              alt="logo"
            />
          </Link>
     );
}
 
export default LogoIcon;