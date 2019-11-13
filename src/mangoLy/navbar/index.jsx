import React from 'react';
import styled from 'styled-components';

//Components
import ContainerHeaderML from '../layout/containerHeader';



const NavContainer = styled.div`
    background: ${(props) => props.bgColor};
`;
const NavSC = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    
`;

function NavBar1(props) {
    const {logoImg, children, bgColor} = props;
    return(
        <NavContainer bgColor={bgColor}>
            <ContainerHeaderML>
                <NavSC >
                    <img src={logoImg} alt="logo"/>
                    {children}
                </NavSC>
            </ContainerHeaderML>
        </NavContainer>
    )
}

export default NavBar1;