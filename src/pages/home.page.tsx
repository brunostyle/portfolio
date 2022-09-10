import { Logo, VariantsContainer, VariantsItem } from '../components/framer';
import { Description, Title } from '../styles';
import { HomeContainer, HomeContact, HomeIcon } from '../styles/home';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from '../assets/icons';

export const HomePage = () => (
	<HomeContainer>
		<Logo />
		<Description>Hello I am</Description>
		<Title>Bruno Millalipe</Title>
		<Description>- Web Developer -</Description>
		<VariantsContainer>
			<HomeContact>
				<VariantsItem>
					<HomeIcon color="red">
						<AiOutlineMail />
						<Description>brunomstyle@gmail.com</Description>
					</HomeIcon>
				</VariantsItem>
				<VariantsItem>
					<HomeIcon color="white">
						<AiFillGithub />
						<Description>github.com/brunostyle</Description>
					</HomeIcon>
				</VariantsItem>
				<VariantsItem>
					<HomeIcon color="darkorchid">
						<AiFillLinkedin />
						<Description>bruno-millalipe-243141204</Description>
					</HomeIcon>
				</VariantsItem>
			</HomeContact>
		</VariantsContainer>
	</HomeContainer>
);
