import { Outlet } from "react-router-dom"
import Menu from "../components/menu/Menu";
import { Background, ContainerApp } from "../styles/styles";

const AppLayout = () => {
    return (
        <Background>
            <Menu />
            <ContainerApp>
                <Outlet />
            </ContainerApp>
        </Background>
    )
}

export default AppLayout