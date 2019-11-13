import React from 'react';
import styled from 'styled-components';

const CardBodyContainer = styled.div`
    padding: 0 30px 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: baseline;
`;
function CardBody({children}) {
    return(
        <CardBodyContainer>
            {children}
        </CardBodyContainer>
    )
}

export default CardBody;