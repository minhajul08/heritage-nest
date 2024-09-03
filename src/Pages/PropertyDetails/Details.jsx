import { CiLocationOn } from "react-icons/ci";
import img1 from '../../assets/images/thumbnale (1).jpg'
import img2 from '../../assets/images/thumbnale (2).jpg'
import img3 from '../../assets/images/thumbnale (3).jpg'
import img4 from '../../assets/images/thumbnale.jpg'
import { FaBedPulse } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";
import { GiFurnace } from "react-icons/gi";
import Map from "./Map";
 
const Details = () => {
    return (
        <div>
            <div className="max-w-[1240px] mx-auto px-4 my-10">
                <div>
                    <h2 className="text-xl font-semibold ">3 BHK Builder Floor For Sale In Site Ram Bazar Hybrid <span className="text-2xl
                     font-bold pl-6">$300k</span></h2>
                    <p className='flex items-center pt-2 gap-2  '> <CiLocationOn className='text-orange-700 text-xl font-extrabold' /> Meadowshire Park, Greanfield, USA</p>
                    <div className="md:grid mt-2 mb-6 grid-cols-12 gap-10">

                        <div className="col-span-8 border-t-[1px] pt-4">
                            <img src={img1} className="w-full h-[400px]" alt="" />
                            <div className="flex gap-4  mt-2 items-center justify-between">
                                <img src={img3} className="w-72 h-[165px]" alt="" />
                                <img src={img4} className="w-72 h-[165px]" alt="" />
                                <div className="relative">
                                    <img src={img2} className="w-52 h-[165px]" alt="" />
                                    <div className="absolute  w-[204px] h-[165px]  inset-0 bg-gradient-to-b from-[#0e132548] to-[#14131383] flex items-center justify-center text-white">view more</div>

                                </div>
                             </div>
                             <div className="bg-[#F9FAFB] p-5 my-8 w-full">
                                <h2 className="text-xl font-semibold">Overview</h2>
                                <div className="grid grid-cols-4 mt-3 p-3 border-b-[1px] justify-between items-center">
                                    <p className="flex gap-2 items-center font-semibold"><FaBedPulse />2 Beds</p>
                                    <p className="flex gap-2 items-center font-semibold"><FaBath />2 Baths</p>
                                    <p className="flex gap-2 items-center font-semibold"><MdBalcony/>2 Balcony</p>
                                    <p className="flex gap-2 items-center font-semibold"><GiFurnace />2 Fully Furnished</p>
                                </div>
                                <div className="grid grid-cols-4 mt-7 w-full gap-5 justify-between items-center">
                                     <div>
                                        <p className="text-sm">Carpet Area</p>
                                        <h2 className="font-semibold text-md py-1">2000sqft</h2>
                                        <h2 className="text-sm">$250/sqft</h2>
                                     </div>
                                     <div>
                                        <p className="text-sm">Floor</p>
                                        <h2 className="font-semibold text-md py-1">Second (Out of 6 Floor)</h2> 
                                     </div>
                                     <div>
                                        <p className="text-sm">Transaction type</p>
                                        <h2 className="font-semibold text-md py-1">Ready to move</h2> 
                                     </div>
                                     <div>
                                        <p className="text-sm">LIst</p>
                                        <h2 className="font-semibold text-md py-1">1</h2> 
                                     </div>
                                </div>
                                <div className="grid grid-cols-4 mt-7 w-full gap-5 justify-between items-center">
                                     <div>
                                        <p className="text-sm">Faching</p>
                                        <h2 className="font-semibold text-md py-1">North - East</h2> 
                                     </div>
                                     <div className="col-span-2">
                                        <p className="text-sm">Additional Rooms</p>
                                        <h2 className="font-semibold text-md py-1">1 servent & 1 guest room</h2> 
                                     </div>
                                     <div>
                                        <p className="text-sm">age of constraction</p>
                                        <h2 className="font-semibold text-md py-1">New Constraction</h2> 
                                     </div> 
                                </div>
                             </div>
                        </div>

                        <div className="col-span-4 pt-4">
                            <div className="bg-[#ECF5FF] p-6 rounded-md ">
                                <div>
                                    <p className="text-sm">Property Value</p>
                                    <h2 className="font-bold text-xl py-4">$300k - $310k</h2>
                                    <h2 className="text-sm">Your bid cann;t be than 10% of the property minimum value</h2>
                                </div>
                                <div className="mt-7">
                                    <p>Min</p>
                                    <a className="w-full p-2 mt-2 rounded bg-white block text-black">$ 280k</a>
                                    <p className="mt-4">Max</p>
                                    <a className="w-full p-2 mt-2 rounded bg-white block text-black">$ 280k</a>
                                </div>
                                <div className="relative">
                                    <span className="absolute bg-orange-600 p-2 rounded-[100%] "></span>
                                    <p className="bg-orange-100 p-2 rounded-lg w-full block mt-6"></p>
                                    <span className="absolute right-0 top-0 bg-orange-600 p-2 rounded-[100%] "></span>
                                    <div className="flex mt-1 justify-between items-center">
                                        <p>$ 280k</p>
                                        <p>$ 305k</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="bg-blue-600 rounded p-2 text-center text-white w-44 mt-7">Bid Property</button>
                                </div>
                            </div>
                            <div className="mt-7">
                                <Map/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;