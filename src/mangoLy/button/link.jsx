import React from 'react';
import styled, {css} from 'styled-components';

const ButtonSC = styled.a`
    color: ${props => props.color};
    background: transparent;
    padding: 0;
    font-weight: 600;
    cursor: pointer;
    ${props => props.sm&&css`
        font-size: 0.875rem;
        img {
            height: 12px;
            width: 12px;
        }
    `}
    ${props => props.lg&&css`
        font-size: 1.25rem;
        img {
            height: 20px;
            width: 20px;
        }
    `}
`;

function Link(props) {
    const {children, as, href, lg, sm, color} = props;
    return (
        <ButtonSC 
            href={href}
            lg={lg || false}
            sm={lg || false ? false: sm || false }
            as={as || "a"}
            color= {color || "#5e72e4"}
        >
            {children}
        </ButtonSC>
    )
}


export default Link