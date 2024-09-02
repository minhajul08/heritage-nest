import { CiSearch } from 'react-icons/ci';
import cover from '../../assets/images/cover.jpg';

const Cover = () => {
    return (
        <div className="relative">
            <div className="max-w-[1440px] mx-auto w-full">
                <img src={cover} className="w-full h-[550px] object-cover" alt="Cover Image" />
                <div className="absolute max-w-[1440px] mx-auto inset-0 bg-gradient-to-b from-[#0e1325e0] to-gray-900 "></div>
                <div className="absolute flex-col gap-9 inset-0 flex items-center justify-center">
                     <div className='max-w-[700px] mx-auto'><h1 className="text-white  text-center text-6xl font-semibold">Your's Portal to India's Exquisite Real State</h1></div>
                    <p className='text-white'>Seamlossly connecting you to the heartbeat of india's propertise</p>
                    <button className='btn bg-blue-600 hover:bg-blue-600 text-white rounded flex items-center gap-2 border-none outline-none '><CiSearch />Find property</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;
