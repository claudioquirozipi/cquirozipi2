import React from 'react';
import styled, {css} from 'styled-components';
//Buttons-Types
import Secundary from './secundary';
import Link from './link';
import DropDawn from './dropDown';

const ButtonSC = styled.button`
    outline: none;
    color: white;
    background: ${props => props.color};
    border: 3px solid ${props => props.color};
    cursor: pointer;
    font-weight: 600;
    padding: 0px 12px; 
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
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

function Button(props) {
    const {children, as, curvature, lg, sm, color, disable, width} = props;
    return (
        <ButtonSC 
            lg={lg || false}
            sm={lg || false ? false: sm || false }
            as={as || "button"}
            color= {color || "#5e72e4"}
            disable={disable || false}
            curvature={curvature || false}
            width={width || "auto"}
        >
            {children}
        </ButtonSC>
    )
}

Button.Secundary = Secundary;
Button.Link = Link;
Button.DropDawn = DropDawn;
export default Button;