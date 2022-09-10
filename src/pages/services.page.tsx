import { Container, Description, Title } from '../styles';
import { ServiceItem } from './services.item';
import { VariantsContainer } from '../components/framer';
import { services } from '../assets/data';

export const ServicesPage = () => (
	<>
		<Title>Services</Title>
		<Description>Services that I offer to my clients</Description>
		<VariantsContainer>
			<Container>
				{services.map(service => (
					<ServiceItem key={service.id} {...service} />
				))}
			</Container>
		</VariantsContainer>
	</>
);
