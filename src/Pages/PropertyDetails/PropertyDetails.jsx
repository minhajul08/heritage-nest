import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card from "../../Component/Home/Shared/Card";
import OtherServices from "../Landing/OtherServices";
import Amenties from "./Amenties";
import Details from "./Details";

 
const PropertyDetails = () => {
    return (
        <div>
            <Details/>
            <Amenties/>
            <div className="mx-16">
            <OtherServices/>
            </div>
            <div className="relative  ">
                    <div className="flex max-w-[1240px] mx-auto px-4 justify-end">
                        <p className="underline font-semibold text-blue-500">See all property</p>
                    </div>
                    <Card />
                    <div className='max-w-[1240px] mx-auto absolute top-1/2  left-0 lg:left-[4%]  w-full '>
                    <div className='w-full flex items-center justify-between'>
                            <p className='p-4 rounded-full bg-blue-400 text-white'><FaAngleLeft /></p>
                            <p className='p-4 rounded-full bg-blue-400 text-white'><FaAngleRight /></p>
                        </div>  
                    </div> 
            </div>
            <div className='max-w-[1220px] mx-auto border-b-[1px] w-full mb-12 -mt-5'></div>
        </div>
    );
};

export default PropertyDetails;