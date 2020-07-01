import * as React from "react";

import Layout from "../components/Layout";
import Section1 from "../mangoLy/section";
import word from "../img/work.svg";
import * as speedSeoImg from "../img/speedSeo.png";
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <Layout>
      <Section1 img={word}>
        <Typography variant="h3" color="initial">
          About me
        </Typography>
        <Typography variant="body1" color="initial">
          I am an engineer in industrial processes passionate about frontend web
          development
        </Typography>
      </Section1>
      <Section1 img={speedSeoImg} reverse={true}>
        <Typography variant="h3" color="initial">
          Seo
        </Typography>
        <Typography variant="body1" color="initial">
          Maximum performance in load times and seo with Gatsby
        </Typography>
      </Section1>
    </Layout>
  );
}

export default Home;
