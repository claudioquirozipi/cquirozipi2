import React from 'react';
import styled from 'styled-components';

const CardHeaderContainer = styled.div`
    padding: 20px 30px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: baseline;
`;
function CardHeader({children}) {
    return(
        <CardHeaderContainer>
            {children}
        </CardHeaderContainer>
    )
}

export default CardHeader;