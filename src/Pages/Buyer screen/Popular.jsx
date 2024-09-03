import { CiLocationOn } from 'react-icons/ci';
import image1 from '../../assets/images/thumbnale (1).jpg'
import image2 from '../../assets/images/thumbnale (2).jpg'
import image3 from '../../assets/images/thumbnale (3).jpg'
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import { FaAngleLeft, FaAngleRight, FaImage } from 'react-icons/fa';
const Popular = () => {
    return (
        <div>
            <div className=" my-16">
                <div className="w-full max-w-[1240px] px-4 mx-auto flex justify-between items-center">
                    <h2 className="text-3xl font-semibold ">Popular Properties</h2>
                    <p className="underline text-blue-400 font-semibold">See all peoperty</p>
                </div>
                <div className=' relative'>
                <div className="grid max-w-[1220px] mx-auto px-4 md:px-0 border-b-[1px] pb-5  grid-cols-1 justify-center gap-5 items-center my-8 md:grid-cols-3">
                    <div className="card bg-gray-100  rounded-none">
                        <figure>
                            <img
                            src={image1} className='w-full relative h-[270px]'
                            alt="apartment" />
                            <div className='bg-white p-1 rounded absolute flex items-center gap-2  text-xs left-5 bottom-1/2'>
                                <FaImage  className='text-orange-600'/>
                                <p>20</p>
                            </div>
                        </figure>
                        <div className="card-body p-5">
                             <div className='flex border-b-[1px] py-2 justify-between items-center'>
                                <h4 className=' font-semibold px-2 py-1 rounded bg-blue-100'>Apartment</h4>
                                <h2 className='font-semibold flex items-center gap-1 text-xl'><VscDebugBreakpointLog className='text-orange-600' /> Ready to move</h2>
                             </div>
                             <h2 className='text-2xl font-semibold'>SannySlope Suite</h2>
                            <p className='flex items-center gap-2'> <CiLocationOn className='text-orange-700 text-xl font-extrabold' /> Meadowshire Park, Greanfield, USA</p>
                            <div className="card-actions ">
                            <p className="font-bold text-2xl mt-5">$250000</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-gray-100  rounded-none">
                        <figure>
                            <img
                            src={image2} className='w-full relative h-[270px]'
                            alt="apartment" />
                             <div className='bg-white p-1 rounded absolute flex items-center gap-2  text-xs left-5 bottom-1/2'>
                                <FaImage  className='text-orange-600'/>
                                <p>20</p>
                            </div>
                        </figure>
                        <div className="card-body p-5">
                             <div className='flex border-b-[1px] py-2 justify-between items-center'>
                                <h4 className=' font-semibold px-2 py-1 rounded bg-blue-100'>Apartment</h4>
                                <h2 className='font-semibold flex items-center gap-1 text-xl'><VscDebugBreakpointLog className='text-orange-600' /> Ready to move</h2>
                             </div>
                             <h2 className='text-2xl font-semibold'>SannySlope Suite</h2>
                            <p className='flex items-center gap-2'> <CiLocationOn className='text-orange-700 text-xl font-extrabold' /> Meadowshire Park, Greanfield, USA</p>
                            <div className="card-actions ">
                            <p className="font-bold text-2xl mt-5">$250000</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-gray-100 rounded-none">
                        <figure>
                            <img
                            src={image3} className='w-full relative h-[270px]'
                            alt="apartment" />
                             <div className='bg-white p-1 text-xs rounded absolute flex items-center gap-2 left-5 bottom-1/2'>
                                <FaImage  className='text-orange-600'/>
                                <p>20</p>
                            </div>
                        </figure>
                        <div className="card-body p-5">
                             <div className='flex border-b-[1px] py-2 justify-between items-center'>
                                <h4 className=' font-semibold px-2 py-1 rounded bg-blue-100'>Apartment</h4>
                                <h2 className='font-semibold flex items-center gap-1 text-xl'><VscDebugBreakpointLog className='text-orange-600' /> Ready to move</h2>
                             </div>
                             <h2 className='text-2xl font-semibold'>SannySlope Suite</h2>
                            <p className='flex items-center gap-2'> <CiLocationOn className='text-orange-700 text-xl font-extrabold' /> Meadowshire Park, Greanfield, USA</p>
                            <div className="card-actions ">
                            <p className="font-bold text-2xl mt-5">$250000</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
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

export default Popular;