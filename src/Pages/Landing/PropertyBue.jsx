import { CiSearch } from 'react-icons/ci';
import thumbnel1 from '../../assets/images/thumbnale (1).jpg'
import thumbnel2 from '../../assets/images/thumbnale (3).jpg'
import thumbnel3 from '../../assets/images/thumbnale (2).jpg'
import thumbnel4 from '../../assets/images/thumbnale.jpg'
import thumbnel5 from '../../assets/images/miniCat (1).jpg'
import thumbnel6 from '../../assets/images/miniCat (2).jpg'
import './style.css'
import { FaPlay } from 'react-icons/fa';
const PropertyBue = () => {
    return (
        <div>
            <div className="max-w-[1240px] mx-auto mt-16 mb-32">

                <div className="grid grid-cols-1 md:space-y-0 space-y-6 p-6 md:grid-cols-2 gap-10">
                    <div>
                        <div className=' relative'>
                            <img src={thumbnel1} className='w-[75%]  h-[400px] rounded-lg' alt="" />
                            <div className=' '>
                                <img src={thumbnel2} className='w-[75%] absolute shadow-xl h-[250px] top-[50%] left-20 rounded-lg' alt="" />
                                <span className='p-5 rounded-full absolute  cursor-pointer shadow-2xl top-[44%] left-[70%] bg-blue-600 text-white'><FaPlay /></span>
                            </div>
                        </div>
                    </div>
                    <div className="pr-0 md:pr-20">
                        <h4 className="line font-bold pl-[40px] text-orange-600"> <span id="span"></span> Propert buying</h4>
                        <h2 className="text-4xl font-bold py-5">Efficient And Transparent Home Buying Solution</h2>
                        <p>It is a long eatablished fact that a redear will be directad by the readable content of a page when looking at its layout.</p>
                        <button className='btn rounded-sm mt-10 bg-[#2564eb1e]  hover:bg-[#2564eb34] text-blue-600 flex items-center gap-2 border-none outline-none '><CiSearch />Find property</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 space-y-6 md:space-y-0 p-6 md:grid-cols-2 gap-10 mt-12 md:mt-32">
                <div className="pr-0 md:pr-20">
                        <h4 className="line font-bold pl-[40px] text-orange-600"> <span id="span"></span> Propert buying</h4>
                        <h2 className="text-4xl font-bold py-5">Efficient And Transparent Home Buying Solution</h2>
                        <p>It is a long eatablished fact that a redear will be directad by the readable content of a page when looking at its layout.</p>
                        <button className='btn rounded-sm mt-10 bg-[#2564eb1e] hover:bg-[#2564eb34] text-blue-600 flex items-center gap-2 border-none outline-none '><CiSearch />Find property</button>
                    </div>
                    <div>
                        <div className=' relative'>
                            <img src={thumbnel3} className='w-[75%] mt-32 h-[400px] rounded-lg' alt="" />
                            <div className=' '>
                                <img src={thumbnel4} className='w-[75%] absolute shadow-xl h-[250px] -top-[25%] left-20 rounded-lg' alt="" />
                                <span className='p-5 rounded-full cursor-pointer absolute shadow-2xl -top-[6%] left-16 bg-blue-600 text-white'><FaPlay /></span>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div className="grid grid-cols-1 md:space-y-0 space-y-6 p-6 md:grid-cols-2 md:mt-20 mt-12 gap-10">
                    <div>
                        <div className=' relative'>
                            <img src={thumbnel5} className='w-[75%]  h-[400px] rounded-lg' alt="" />
                            <div className=' '>
                                <img src={thumbnel6} className='w-[75%] absolute shadow-xl h-[250px] top-[50%] left-20 rounded-lg' alt="" />
                                <span className='p-5  cursor-pointer rounded-full absolute shadow-2xl top-[44%] left-[70%] bg-blue-600 text-white'><FaPlay /></span>
                            </div>
                        </div>
                    </div>
                    <div className="pr-0 md:pr-20">
                        <h4 className="line font-bold pl-[40px] text-orange-600"> <span id="span"></span> Propert buying</h4>
                        <h2 className="text-4xl font-bold py-5">Efficient And Transparent Home Buying Solution</h2>
                        <p>It is a long eatablished fact that a redear will be directad by the readable content of a page when looking at its layout.</p>
                        <button className='btn rounded-sm  mt-10 bg-[#2564eb1e] hover:bg-[#2564eb34] text-blue-600 flex items-center gap-2 border-none outline-none '><CiSearch />Find property</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PropertyBue;