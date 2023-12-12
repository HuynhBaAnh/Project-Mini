import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Slide = () => {
    return (
        <Swiper
        spaceBetween={10} //khoảng cách giữa các silde
        slidesPerView={1} //Số hình trên 1 khung hình
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src="https://victorthemes.com/themes/windfall/wp-content/uploads/2019/04/slide1.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://victorthemes.com/themes/windfall/wp-content/uploads/2019/04/slide2.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://victorthemes.com/themes/windfall/wp-content/uploads/2019/04/slide3.png" alt="" /></SwiperSlide>
        </Swiper>
    )
}
export default Slide