import React from 'react';
import styled from 'styled-components';

//Mango-Library
import InputContainer1 from './input';
const FormSC = styled.form`
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    width: ${props => props.width};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;
`;

function Form({children, width }) {
    return(
        <FormSC width={width||"100%"}>
            {children}
        </FormSC>
    )
}

Form.Input1 = InputContainer1
export default Form;