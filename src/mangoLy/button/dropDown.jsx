import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const imgIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" fill="#fff"/><path d="M0 0h24v24H0z" fill="none"/></svg>

const ButtonSC = styled.button`
    outline: none;
    position: relative;
    color: white;
    background: ${props => props.color};
    border: 3px solid ${props => props.color};
    cursor: pointer;
    font-weight: 600;
    padding: 0 12px 0 24px; 
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    border-radius: ${props => props.curvature ? "50px" : "8px"};
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
const UlButton = styled.ul`
    position: absolute;
    right: 0;
    top: calc(100% + 10px);
    padding: 6px 12px;  
    margin: 0;
    background: white;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);    
    border-radius: 8px;
    transform-origin: top right;
    transition: transform .3s;
    transform: ${props => props.toggle ? "scaleY(1)" : "scaleY(0)"};
    li {
        margin: 0px;
        color: ${props => props.color};
        width: auto;
        height: 36px;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        list-style: none;
        padding: 6px 24px;  
        border-radius: ${props => props.curvature ? "50px" : "8px"};
        &:hover {
            color: white;
            background: ${props => props.color};
        }
        ${props => props.sm&&css`
            height: 29px;
            font-size: 0.875rem;
        `}
        ${props => props.lg&&css`
            height: 46px;
            font-size: 1.25rem;
        `}
    }
`;
const Icon = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
`;
function handleToggle(toggle, setToggle) {
    setToggle(!toggle);
}
function DropDown(props) {
    const {children, as, curvature, lg, sm, color, disable, data, width } = props;
    const [toggle, setToggle] = useState(false);
    console.log("data",data);
    const myData = data=== undefined ? [] : data;
    return (
        <ButtonSC 
            lg={lg || false}
            sm={lg || false ? false: sm || false }
            as={as || "button"}
            color= {color || "#5e72e4"}
            width={width || "auto"}
            disable={disable || false}
            curvature={curvature || false}
        >
            {children}
            <Icon 
                onClick={() => handleToggle(toggle, setToggle)}
            >
                {imgIcon}
            </Icon>
            <UlButton
                lg={lg || false}
                sm={lg || false ? false: sm || false }

                color= {color || "#5e72e4"}
                curvature={curvature || false}
                toggle = {toggle}
            >
                {
                    myData.map((data,i) => {
                        return(
                            <li key={i} onClick={data.function}>{data.text}</li>
                        )
                    })
                }
            </UlButton>
        </ButtonSC>
    )
}


export default DropDown;