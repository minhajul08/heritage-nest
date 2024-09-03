 
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../../assets/buyer images/profile-picture.jpeg'
import image2 from '../../../assets/buyer images/pro.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
 

// import required modules
import { Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
const Testimonials = () => {
    return (
        <div className='max-w-[1240px] mx-auto mb-8 px-4'>
        <div>
            <h2 className='text-4xl font-semibold text-center'>Testimonials</h2>
        </div>
        <Swiper
          pagination={{
            dynamicBullets: true,
            
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><TestimonialCard image={image1} image1={image2}/></SwiperSlide>
          <SwiperSlide><TestimonialCard image={image1} image1={image2} /></SwiperSlide>
          <SwiperSlide><TestimonialCard image={image1} image1={image2} /></SwiperSlide> 
        </Swiper>
      </div>
    );
};

export default Testimonials;