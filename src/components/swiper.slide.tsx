import { Swiper as SwiperContainer } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { Child } from '../helpers/interface';
import 'swiper/css';
import 'swiper/css/pagination';

export const Swiper = ({ children }: Child) => (
	<SwiperContainer
		effect={'coverflow'}
		grabCursor={true}
		centeredSlides={true}
		slidesPerView={'auto'}
		loop={true}
		pagination={true}
		modules={[EffectCoverflow, Pagination]}
		coverflowEffect={{
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		}}
	>
		{children}
	</SwiperContainer>
);
