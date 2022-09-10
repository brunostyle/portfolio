import { VariantsItem } from '../components/framer';
import { IService } from '../helpers/interface';
import { Description, SubTitle, Icon } from '../styles';
import { ServiceCard } from '../styles/services';

export const ServiceItem = ({ icon, title, description }: IService) => (
	<ServiceCard>
		<VariantsItem>
			<Icon>{icon}</Icon>
			<SubTitle>{title}</SubTitle>
			<Description>{description}</Description>
		</VariantsItem>
	</ServiceCard>
);
