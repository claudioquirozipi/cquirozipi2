import * as React from 'react';
import Section1 from '../../mangoLy/section';
import * as img1 from '../img/projects/mangoLy.jpg';
function Services() {
    return(
        <>
            <Section1 img={img1}>
                <h2>Services</h2>
                <ul>
                    <li>Components in html or react.</li>
                    <li>Landing page</li>
                    <li>Web applications</li>
                    <li>Inventory systems</li>
                </ul>
            </Section1>
        </>
    )
}

export default Services;