import React from 'react';
import styled, {css} from 'styled-components';

const ButtonSC = styled.button`
    outline: none;
    color: ${props => props.color};
    background: transparent;
    border: 3px solid ${props => props.color};
    cursor: pointer;
    font-weight: 600;
    padding: 0 12px; 
    
    border-radius: ${props => props.curvature ? "50px" : "6px"};
    width: ${props => props.width};
    height: 36px;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 16px;
        width: 16px;
    }
    ${props => props.disable&&css`
        background: #ced4da;
        border: 3px solid #ced4da;
    `}
    ${props => props.sm&&css`
        height: 29px;
        font-size: 0.875rem;
        img {
            height: 12px;
            width: 12px;
        }
    `}
    ${props => props.lg&&css`
        height: 46px;
        font-size: 1.25rem;
        img {
            height: 20px;
            width: 20px;
        }
    `}
`;

function Secundary(props) {
    const {children, as, curvature, lg, sm, color, disable, width} = props;
    return (
        <ButtonSC 
            lg={lg || false}
            sm={lg || false ? false: sm || false }
            as={as || "button"}
            width={width || "auto"}
            color= {color || "#5e72e4"}
            disable={disable || false}
            curvature={curvature || false}
        >
            {children}
        </ButtonSC>
    )
}


export default Secundary