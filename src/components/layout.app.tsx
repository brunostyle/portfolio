import { Outlet } from 'react-router-dom';
import { Menu } from './menu';
import { Background, ContainerApp } from '../styles';

export const AppLayout = () => (
	<Background>
		<Menu />
		<ContainerApp>
			<Outlet />
		</ContainerApp>
	</Background>
);
