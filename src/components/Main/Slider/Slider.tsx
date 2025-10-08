// import required modules
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from 'swiper/modules';

import './slider.css'


// // Import Swiper styles
// @ts-expect-error no type declarations for CSS
import 'swiper/css';
// @ts-expect-error no type declarations for CSS
import "swiper/css/navigation";

const Slider = () => {
	
	
	return (
		<Swiper
			spaceBetween={50}
			centeredSlides={true}
			autoplay={{delay: 5000, disableOnInteraction: false,}}
			navigation={true}
			modules={[Autoplay, Navigation]}
			style={{marginBottom: '65px'}}
		>
			<SwiperSlide><img src="/Main/Slider/Slide_1.png" alt="slide_1"/></SwiperSlide>
			<SwiperSlide><img src="/Main/Slider/Slide_2.png" alt="slide_2"/></SwiperSlide>
			<SwiperSlide><img src="/Main/Slider/Slide_3.png" alt="slide_3"/></SwiperSlide>
			<SwiperSlide><img src="/Main/Slider/Slide_4.png" alt="slide_4"/></SwiperSlide>
		</Swiper>
	);
};

export default Slider;