import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

 
const Footer = () => {
    return (
        <div>
            <div className="bg-[#ECF5FF] max-w-[1440px] mx-auto px-10 pb-7 pt-14">
                <footer className="footer text-base-content p-10">
                    <aside>
                       <Logo/>
                        <p>
                        Bd calling iT Ltd.
                        <br />
                        Providing reliable tech since 2002
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Products</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover"><Link to="/about">About us</Link></a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">News</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Blogs</a>
                        <a className="link link-hover">Newsletter</a>
                        <a className="link link-hover">Events</a>
                        <a className="link link-hover">Help center</a>
                        <a className="link link-hover">Support</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <a className="link link-hover">Twitter</a>
                        <a className="link link-hover">Facebook</a>
                        <a className="link link-hover">Linkdin</a>
                        <a className="link link-hover">Github</a>
                        <a className="link link-hover">Dribble</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms </a>
                        <a className="link link-hover">Privacy</a>
                        <a className="link link-hover">Cookies</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Setting</a>
                    </nav>
                </footer>
                <footer className="footer max-w-7xl mx-auto border-b-0 border-r-0 border-l-0  border-[1px] border-t-blue-200 text-neutral-content items-center p-5">
                    <aside className="grid-flow-col items-center">
                        
                        <p className="text-gray-800">© Heritage Nest {new Date().getFullYear()} - All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <a className="text-xl text-blue-500">
                            <Link to="/"><FaTwitter/></Link>
                        </a>
                        <a className="text-xl text-blue-500">
                            <Link to="/"><FaFacebook/></Link>
                        </a> 
                        <a className="text-xl text-blue-500">
                            <Link to="/"><FaInstagram/></Link>
                        </a>
                        <a className="text-xl text-blue-500">
                            <Link to="/"><FaYoutube/></Link>
                        </a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;