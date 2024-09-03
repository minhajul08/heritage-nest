import { Link } from "react-router-dom";
import Logo from "./Logo";

 
const Navbar = () => {
    return (
        <div>
            <div className="navbar max-w-[1440px] shadow-lg mx-auto py-4 px-12 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
                         <a className=""> <Link to="/buy">Buy</Link></a>
                        <a className="">Sell</a>
                        <a className="">Services</a>
                    </ul>
                    </div>
                    <div className="lg:flex hidden items-center gap-6">
                        <a className=""> <Link to="/buy">Buy</Link></a>
                       <Link> <a className="">Sell</a></Link>
                        <Link><a className="">Services</a></Link>
                    </div>
                </div>
                <div className="navbar-center flex">
                    <Link to="/"> <Logo/></Link>
                </div>
                <div className="navbar-end space-x-5">
                   <Link to="/find-property"> <a className="">Manage Rentals</a></Link>
                    <Link><a className="">Sign in</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;