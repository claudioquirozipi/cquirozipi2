import * as React from "react";
import { FooterSC } from "./style";
//Data
import { data } from "./data";

function Footer() {
  return (
    <FooterSC>
      <h3>Social networks</h3>
      <ul>
        {data.map((dato, i) => (
          <li key={i}>
            <img src={dato.img} alt="" />
            <a target="_black" href={dato.url}>
              {dato.text}
            </a>
          </li>
        ))}
      </ul>
    </FooterSC>
  );
}

export default Footer;
