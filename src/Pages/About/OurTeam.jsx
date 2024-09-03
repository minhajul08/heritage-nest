import img1 from '../../assets/Team/images (2).jpeg'
import img2 from '../../assets/Team/images (3).jpeg'
import img3 from '../../assets/Team/images (4).jpeg'
import img4 from '../../assets/Team/house.jpg'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const OurTeam = () => {
    return (
        <div>
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="my-6">
                    <h4 className="line font-bold pl-[40px] text-orange-600"> <span id="org"></span> Our Team</h4>
                    <h2 className="text-3xl font-bold py-4">Discover The Faces Behind Our Success</h2>
                </div>
                <div className="grid relative grid-cols-2 md:grid-cols-3 items-center justify-between gap-4">
                    <img src={img1} className='w-[370px] h-[300px]' alt="" />
                    <img src={img2} className='w-[370px] h-[300px]' alt="" />
                    <img src={img3} className='w-[370px] h-[300px]' alt="" />
                    <div className='max-w-[1240px] absolute top-1/2  -left-2  w-full '>
                   <div className='w-full flex items-center justify-between'>
                        <p className='p-4 rounded-full bg-blue-400 text-white'><FaAngleLeft /></p>
                        <p className='p-4 rounded-full bg-blue-400 text-white'><FaAngleRight /></p>
                    </div>  
                </div>
                </div>
                <div className='md:flex mt-16 mb-12 justify-between items-center gap-6'>
                <div className="md:max-w-[50%]">
                    <h4 className="line font-bold pl-[40px] text-orange-600"> <span id="org"></span>Meet The Team For Book Consoltation</h4>
                    <h2 className="text-3xl font-bold py-4">Meet the stewards of your heritage journey</h2>
                    <p>Each member an embodiment of expertise and warmth, dedicated to guiding you home, every step of the way</p>
                    <button className='px-4 py-2 bg-blue-600 text-white rounded-md font-semibold text-sm mt-8'>Book Consultation Now</button>
                </div>
                <div>
                    <img src={img4} className='w-[400px] ' alt="" />
                </div>
                </div>
                 
            </div>
        </div>
    );
};

export default OurTeam;