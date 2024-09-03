import img from '../../assets/buyer images/aboutCover.jpg'
const AboutCover = () => {
    return (
        <div className='max-w-[1440px] relative mx-auto'>
            <img src={img} className='object-cover w-full h-96' alt="" />
            <div className="absolute max-w-[1440px] mx-auto inset-0 bg-gradient-to-b from-[#0e13253d] to-[#302c2c6b] "></div>
        </div>
    );
};

export default AboutCover;