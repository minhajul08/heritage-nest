import { FaRegArrowAltCircleDown } from "react-icons/fa";

 
const PlotList = () => {
    return (
        <div>
            <div className="max-w-[1240px] px-4 my-8 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 items-center">
                <div className="w-full p-5 rounded-md bg-orange-100">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold text-orange-600">2K+</h2>
                        <p>New Flat Listed</p>
                    </div>
                    <div className="mt-10 flex justify-between items-center">
                        <a className="underline text-orange-600">View all</a>
                        <a className="text-orange-600 text-2xl"><FaRegArrowAltCircleDown /> </a>
                    </div>
                </div>
                <div className="w-full p-5 rounded-md bg-blue-100">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold text-blue-600 h-8"></h2>
                        <p>New Flat Listed</p>
                    </div>
                    <div className="mt-10 flex justify-between items-center">
                        <a className="underline text-blue-600">View all</a>
                        <a className="text-blue-600 text-2xl"><FaRegArrowAltCircleDown /> </a>
                    </div>
                </div>
                <div className="w-full p-5 rounded-md bg-orange-100">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold text-orange-600">2K+</h2>
                        <p>New Flat Listed</p>
                    </div>
                    <div className="mt-10 flex justify-between items-center">
                        <a className="underline text-orange-600">View all</a>
                        <a className="text-orange-600 text-2xl"><FaRegArrowAltCircleDown /> </a>
                    </div>
                </div>
                <div className="w-full p-5 rounded-md bg-blue-100">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold text-blue-600">2K+</h2>
                        <p>New Flat Listed</p>
                    </div>
                    <div className="mt-10 flex justify-between items-center">
                        <a className="underline text-blue-600">View all</a>
                        <a className="text-blue-600 text-2xl"><FaRegArrowAltCircleDown /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlotList;