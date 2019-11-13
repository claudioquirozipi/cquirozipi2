import React from 'react';

//Mango-Library
import FormContainer1 from '../form/FormContainer1';
function Container({children}) {
    return(
        <div>
            {children}
        </div>
    )
}
Container.Form = FormContainer1;
export default Container;