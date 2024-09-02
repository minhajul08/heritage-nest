import Logo from "./Logo";

 
const Navbar = () => {
    return (
        <div>
            <div className="navbar max-w-[1440px] mx-auto pt-3 px-12 bg-base-100">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                         <a className="">Buy</a>
                        <a className="">Sell</a>
                        <a className="">Services</a>
                    </ul>
                    </div>
                    <div className="lg:flex hidden items-center gap-6">
                        <a className="">Buy</a>
                        <a className="">Sell</a>
                        <a className="">Services</a>
                    </div>
                </div>
                <div className="navbar-center flex">
                    <Logo/>
                </div>
                <div className="navbar-end space-x-5">
                    <a className="">Manage Rentals</a>
                    <a className="">Sign in</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;