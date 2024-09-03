 import { CiLocationOn } from 'react-icons/ci';
import cover from '../../assets/buyer images/buyercover (2).jpg'
 import './style.css'
import { FaAngleDown, FaSearch } from 'react-icons/fa';
import { MdOtherHouses, MdOutlineAttachMoney } from 'react-icons/md';
const BuyerCover = () => {
    return (
        <div>
            <div className="max-w-[1440px] md:mb-36 mb-16 relative mx-auto">
                <img src={cover} className='w-full h-[350px] object-cover' alt="cover Image" />
                <div className="absolute max-w-[1440px] mx-auto inset-0 bg-gradient-to-b from-[#0e13257a] to-[#141313ad] "></div>
                <div className='absolute top-[20%]  md:left-[15%] md:max-w-[950px] w-full  mx-auto bg-white shadow-md rounded-xl p-8'>
                    
                    <div className='w-[100%] flex font-semibold border-b-[1px] py-1 items-center gap-5'>
                        <p className='text-blue-600 buy'> <span id='span'></span> Buy</p> 
                        <p>Rent</p>
                        <p>PG</p>
                        <p>Plot</p>
                        <p>Commercial</p>
                    </div>

                    <div className='w-full my-6'>
                        <label className="input outline-none input-bordered flex items-center gap-2">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                            </svg>
                            <input type="text" className="grow w-full outline-none" placeholder="Search properties" />
                            
                        </label>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 items-center'>
                        <div className=''>
                            <h2 className='flex gap-2 items-center text-xl font-bold'><CiLocationOn className='text-orange-600' /> Your Location</h2>
                            <p className='w-full p-4 flex justify-end text-orange-600 rounded mt-4 bg-[#ECF5FF]'><FaAngleDown /></p>
                        </div>
                        <div className=''>
                            <h2 className='flex gap-2 items-center text-xl font-bold'><MdOtherHouses className='text-orange-600' />Property Type</h2>
                            <p className='w-full p-4 flex justify-end text-orange-600 rounded mt-4 bg-[#ECF5FF]'><FaAngleDown /></p>
                        </div>
                        <div className=''>
                            <h2 className='flex gap-2 items-center text-xl font-bold'><MdOutlineAttachMoney className='text-orange-600' /> Budget</h2>
                            <p className='w-full p-4 flex justify-end text-orange-600 rounded mt-4 bg-[#ECF5FF]'><FaAngleDown /></p>
                        </div>
                    </div>

                    <div>
                        <button className='btn w-full bg-blue-700 mt-5 flex items-center gap-3 hover:bg-blue-700 text-white'><FaSearch /> Find Property</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BuyerCover;