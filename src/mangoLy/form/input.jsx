import React from 'react';
import styled from 'styled-components';

const InputContainerSC = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid red;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 30px;
    box-shadow: 0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02);
    border: 0;
    input {
        width: 100%;
        border: none;
        outline: none;
        padding: 0 10px;
        color: ${props => props.color};
    }
`;

function InputContainer1({children, color}) {
    return(
        <InputContainerSC color={color||"#525f7f"}>
            {children}
        </InputContainerSC>
    )
}

export default InputContainer1;