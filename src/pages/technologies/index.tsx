import * as React from "react";

import Layout from "../../components/Layout";
import { ContainerGrid, TechnologieContainer } from "./styled";
import { data } from "./data";

interface iData {
  title: string;
  icon: string;
}

function Technologies() {
  return (
    <Layout>
      <div className="container mt-5 mb-5">
        <h1>Technologies</h1>

        <ContainerGrid>
          {data.map((data: iData, i: number) => {
            return (
              <div>
                <TechnologieContainer key={i}>
                  <img src={data.icon} alt={data.title} />
                  <p>{data.title}</p>
                </TechnologieContainer>
              </div>
            );
          })}
        </ContainerGrid>
      </div>
    </Layout>
  );
}

export default Technologies;
