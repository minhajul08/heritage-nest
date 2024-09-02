import { PiHouseSimpleLight } from "react-icons/pi";

 
const OtherServices = () => {
    return (
        <div>
            <div className="max-w-[1240px] mx-auto my-14">
                <h2 className="text-center font-bold text-5xl">Other Services</h2>
                <div className="grid grid-cols-1 p-5 md:p-0 md:grid-cols-3 justify-between items-center mt-10 gap-8">
                    <div className="flex gap-4 bg-[#ECF5FF] p-5 rounded-lg">
                        <div > <p className="p-2 bg-orange-600 rounded-md text-white text-2xl mt-2" ><PiHouseSimpleLight  /></p></div>
                        <div className=" space-y-3">
                            <h4 className="text-2xl font-bold">Advanced Property Search</h4>
                            <p>Effortiestly find your dream property find advance search</p>
                        </div>
                    </div>
                    <div className="flex gap-3 bg-[#ECF5FF] p-5 rounded-lg">
                        <div > <p className="p-2 bg-orange-600 rounded-md text-white text-2xl mt-2" ><PiHouseSimpleLight  /></p></div>
                        <div className=" space-y-3">
                            <h4 className="text-2xl font-bold">Virtual Tours And Multimidia</h4>
                            <p>Explore properties through immersive virtual rour and HD photos</p>
                        </div>
                    </div>
                    <div className="flex gap-3 bg-[#ECF5FF] p-5 rounded-lg">
                        <div > <p className="p-2 bg-orange-600 rounded-md text-white text-2xl mt-2" ><PiHouseSimpleLight  /></p></div>
                        <div className=" space-y-3">
                            <h4 className="text-2xl font-bold">Secure Online Transactions</h4>
                            <p>Ensure source transaction and e-sign document seamlessly online</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherServices;
