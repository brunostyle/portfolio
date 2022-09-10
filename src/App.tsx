import { AnimatePresence } from 'framer-motion';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AppLayout } from './components/layout';
import { AboutPage } from './pages/about';
import { EducationPage, EducationCategory } from './pages/education';
import { HomePage } from './pages/home';
import { PortfolioPage, PortfolioItem } from './pages/portfolio';
import { ServicesPage } from './pages/services';
import { SkillsPage, SkillCategory } from './pages/skills';

export const App = () => {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<AppLayout />}>
					
					<Route index element={<HomePage />} />

					<Route path="about" element={<AboutPage />} />

					<Route path="education" element={<EducationPage />}>
						<Route index element={<EducationCategory />} />
						<Route path=":category" element={<EducationCategory />} />
					</Route>

					<Route path="skills" element={<SkillsPage />}>
						<Route index element={<SkillCategory />} />
						<Route path=":category" element={<SkillCategory />} />
					</Route>

					<Route path="portfolio" element={<PortfolioPage />}>
						<Route path=":id" element={<PortfolioItem />} />
					</Route>

					<Route path="services" element={<ServicesPage />} />

					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
};
