import img1 from '../../assets/Team/home.jpg'
import img2 from '../../assets/Team/home2.jpg'
const StoryMission = () => {
    return (
        <div>
            <div className="max-w-[1240px] mt-6 mx-auto px-4">
                <div>
                    <div className='relative mb-32'>
                        <img src={img1} className='md:w-[70%] h-[430px]  ' alt="" />
                        <div className="absolute  md:w-[70%] h-[430px]  inset-0 bg-gradient-to-b from-[#0e13252f] to-[#010101] "></div>
                        <div className='p-5 absolute -bottom-20 right-0 max-w-[500px] rounded-md bg-[#ECF5FF]'>
                            <h4 className="line font-bold pl-[40px] text-orange-600"> <span id="org"></span> Our Story</h4>
                            <h2 className="text-3xl font-bold py-3">Effecient and Transparent Home Buying Solution</h2> 
                            <p>In the samphony of bustling markets and serens landscape. Heritage nest was born-a vision to. </p>
                        </div>
                    </div>

                    <div className='relative flex mb-32'>
                        <div className='w-[30%] h-[400px]'></div>
                        <img src={img2} className='md:w-[70%] h-[430px]  ' alt="" />
                        <div className="absolute left-[30%]  md:w-[70%] h-[430px]  inset-0 bg-gradient-to-b from-[#0e132531] to-[#010101] "></div>
                        <div className='p-5 absolute -bottom-20 left-0 max-w-[500px] rounded-md bg-[#ECF5FF]'>
                            <h4 className="line font-bold pl-[40px] text-orange-600"> <span id="org"></span> Mission Statement</h4>
                            <h2 className="text-3xl font-bold py-3">Effecient and Transparent Home Buying Solution</h2> 
                            <p>In the samphony of bustling markets and serens landscape. Heritage nest was born-a vision to. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryMission;