import { Outlet } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { Description, Title } from '../styles';
import { portfolio } from '../assets/data';
import { Swiper } from '../components/swiper';
import { PortfolioCard } from './portfolio.card';

export const PortfolioPage = () => (
	<>
		<Title>Portfolio</Title>
		<Description>Work Gallery</Description>
		<Swiper>
			{portfolio.map(work => (
				<SwiperSlide key={work.id} className="portfolio__card">
					<PortfolioCard {...work} />
				</SwiperSlide>
			))}
		</Swiper>
		<Outlet />
	</>
);
