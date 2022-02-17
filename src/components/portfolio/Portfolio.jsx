import { Outlet } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { Description, Title } from "../../styles/styles";
import { Swiper } from "./swiper";
import Card from './Card'
import works from "../../data/json/portfolio.json";
import Spring from "../../animation/Spring";

const Portfolio = () => {
  return (
    <div>
      <Title>Portfolio</Title>
      <Description>Work Gallery</Description>
      <Spring>
        <Swiper>
          {works.map(work => (
            <SwiperSlide key={work.id} className="portfolio__card">
              <Card {...work} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Spring>
      <Outlet />
    </div>
  );
};

export default Portfolio;
