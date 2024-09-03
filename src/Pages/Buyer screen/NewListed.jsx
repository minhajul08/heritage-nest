 
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Card from '../../Component/Home/Shared/Card';
const NewListed = () => {
    return (
        <div>
            <div className=" my-16">
                <div className="w-full max-w-[1240px] px-4 mx-auto flex justify-between items-center">
                    <h2 className="text-3xl font-semibold ">New Listed Properties</h2>
                    <p className="underline text-blue-400 font-semibold">See all peoperty</p>
                </div>
                <div className='  relative'>
                    <Card/>
                    <div className='max-w-[1240px] absolute top-1/2  left-0 lg:left-[4%]  w-full '>
                    <div className='w-full flex items-center justify-between'>
                        <p className='p-4 rounded-full bg-blue-400 text-white'><FaAngleLeft /></p>
                        <p className='p-4 rounded-full bg-blue-400 text-white'><FaAngleRight /></p>
                    </div>  
                </div>
               
                </div>
                 
            </div>
        </div>
    );
};

export default NewListed;