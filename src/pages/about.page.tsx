import { Spring, Push } from '../components/framer';
import bruno from '../assets/img/bruno.jpg';
import CV from '../assets/cv/cv_bruno.pdf';
import { Description, Title } from '../styles';
import { AboutButton, AboutContainer, AboutExperience, AboutHours, AboutImage } from '../styles/about';

export const AboutPage = () => (
	<AboutContainer>
		<Spring>
			<Title>About</Title>
			<Description>My introduction</Description>
			<Push>
				<AboutImage>
					<img src={bruno} alt="bruno" />
				</AboutImage>
			</Push>
			<Description>
				I am a web developer, with extensive knowledge and years of About experience, working in web technologies and UI / UX design, delivering quality work.
			</Description>
			<AboutExperience>
				<div>
					<AboutHours>05+</AboutHours>
					<Description>years of About experience</Description>
				</div>
				<div>
					<AboutHours>20+</AboutHours>
					<Description>finished projects</Description>
				</div>
				<div>
					<AboutHours>1000+</AboutHours>
					<Description>About hours worked</Description>
				</div>
			</AboutExperience>
			<AboutButton href={CV} download="cv_bruno.pdf">
				Download CV
			</AboutButton>
		</Spring>
	</AboutContainer>
);
