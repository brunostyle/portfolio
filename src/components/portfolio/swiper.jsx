import { Swiper as SwiperContainer } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

export const Swiper = ({ children }) => {
  return (
      <SwiperContainer
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={40}
        loop={true}
        coverflowEffect={{
          rotate: 0,
        }}
        autoplay={{
          delay: 4000,
        }}
      >
        {children}
      </SwiperContainer>
  );
};
