import { CgGym } from "react-icons/cg";
import { FaDraftingCompass, FaGamepad, FaHouseDamage, FaJoomla, FaRoute, FaWifi } from "react-icons/fa";
import { FaGlassWater } from "react-icons/fa6";
import { GiBackgammon, GiFireplace, GiNuclearWaste, GiParkBench, GiPoisonGas } from "react-icons/gi";
import { GrServices, GrVmMaintenance } from "react-icons/gr";
import { MdHomeRepairService, MdSolarPower } from "react-icons/md";
import { PiPark, PiStudentFill, PiTelevisionBold } from "react-icons/pi";
import { SiPowerbi, SiSpringsecurity } from "react-icons/si";
import { TbBrandIntercom } from "react-icons/tb";

 
const Amenties = () => {
    return (
        <div>
            <div className="max-w-[1230px] border-[1px] rounded-lg mt-10 bg-[#F9FAFB] p-5 mx-auto">
                <h2 className="text-2xl font-semibold">Amenties</h2>
                <div className="grid pb-4 gap-8 mt-8 px-6 grid-cols-2 items-center justify-center w-full md:grid-cols-4 ">
                    <div  className="flex items-center gap-2 font-semibold"><MdSolarPower /> Power back up</div>
                    <div  className="flex items-center gap-2 font-semibold"><SiPowerbi /> Lift</div>
                    <div  className="flex items-center gap-2 font-semibold"> <FaHouseDamage />Club house</div>
                    <div  className="flex items-center gap-2 font-semibold"><CgGym />Gymnasum</div>
                    <div  className="flex items-center gap-2 font-semibold"><PiPark />Park</div>
                    <div  className="flex items-center gap-2 font-semibold"><GiParkBench />Reserved Parking</div>
                    <div  className="flex items-center gap-2 font-semibold"><SiSpringsecurity />Security</div>
                    <div  className="flex items-center gap-2 font-semibold"><FaGlassWater />Water Storage</div>
                    <div  className="flex items-center gap-2 font-semibold"><GiFireplace />Private Terrace/Garden</div>
                    <div  className="flex items-center gap-2 font-semibold"><FaDraftingCompass />Vasstu Complit</div>
                    <div  className="flex items-center gap-2 font-semibold"><GrServices />Service/Goods lift</div>
                    <div  className="flex items-center gap-2 font-semibold"><PiPark />Visitor Parking</div>
                    <div  className="flex items-center gap-2 font-semibold"><TbBrandIntercom />Intercom Facility</div>
                    <div  className="flex items-center gap-2 font-semibold"><GrVmMaintenance />Maintanence Staff</div>
                    <div  className="flex items-center gap-2 font-semibold"><GiNuclearWaste />Waste Dispose</div>
                    <div  className="flex items-center gap-2 font-semibold"><MdHomeRepairService/>Laundry Service</div>
                    <div  className="flex items-center gap-2 font-semibold"><FaWifi/>Internet/WiFi Service</div>
                    <div  className="flex items-center gap-2 font-semibold"><PiTelevisionBold />DTH Television Facilities</div>
                    <div  className="flex items-center gap-2 font-semibold"><GiPoisonGas />Piped Gas</div>
                    <div  className="flex items-center gap-2 font-semibold"><FaJoomla />Joging And Stroling Track</div>
                    <div  className="flex items-center gap-2 font-semibold"><FaRoute />Outdor Tennis Cuirt</div>
                    <div  className="flex items-center gap-2 font-semibold"><PiStudentFill />Early Learning Centre</div>
                    <div  className="flex items-center gap-2 font-semibold"><FaGamepad />Kids Play Area</div>
                    <div  className="flex items-center gap-2 font-semibold"><GiBackgammon /></div>
                </div>
            </div>
        </div>
    );
};

export default Amenties;