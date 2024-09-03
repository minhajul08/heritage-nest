 
import PropertiseCard from "./PropertiseCard"; 
import RangeSlider from "./RangeSlider";
 
const Properties = () => { 

 
    return (
        <div className="max-w-[1240px] mt-16 mb-12 mx-auto">
           <div className="max-w-[800px] px-4">
                <div className="flex items-center py-4 border-b-[1px] gap-8">
                    <li className="px-3 py-2 list-none bg-blue-700 text-white rounded"><a>Properties (400)</a></li>
                    <li className="px-3 py-2 list-none bg-blue-100 rounded"><a>New Project (400)</a></li>
                    <li className="px-3 py-2 list-none bg-blue-100 rounded"><a>Pre Lunch Offers </a></li>
                </div>
                <div className="border-b-2 pb-3">
                    <h2 className="font-semibold text-2xl mt-7">400 results for rental</h2>
                    <PropertiseCard/>
                </div>
                <div className="flex gap-2 mt-3">
                    <button className="p-2 rounded bg-blue-600 text-white">01</button>
                    <button className="p-2 rounded bg-blue-100">02</button>
                    <button className="p-2 rounded bg-blue-100 ">Next</button>
                </div>
            </div> 
            <div className="max-w-5xl justify-between w-full flex items-center mt-12 p-6 rounded-lg bg-[#ECF5FF]">
                <div>
                    <h2 className="text-2xl font-bold text-black py-3">Need A Home Loan?</h2>
                    <p>Select how much home loan you can take</p>
                </div> 
                <RangeSlider/>
            </div>
        </div>
    );
};

export default Properties;