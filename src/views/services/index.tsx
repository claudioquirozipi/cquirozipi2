import * as React from 'react';
import Section1 from '../../mangoLy/section';
import * as img1 from '../img/projects/mangoLy.jpg';
function Services() {
    return(
        <>
            
            <Section1 img={img1}>
                <h2>Servicios</h2>
                <ul>
                    <li>Componentes en html o react.</li>
                    <li>Landing page.</li>
                    <li>Aplicaciones webs.</li>
                    <li>Sistemas de inventarios.</li>
                </ul>
            </Section1>
        </>
    )
}

export default Services;