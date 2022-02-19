import React from "react";
import styled from "styled-components";
import Section from "./Section";
import model3 from "./../assets/images/model-3.jpg";
import modelY from "./../assets/images/model-y.jpg";
import modelS from "./../assets/images/model-s.jpg";
import modelX from "./../assets/images/model-x.jpg";
import solarPanel from "./../assets/images/solar-panel.jpg";
import solarRoof from "./../assets/images/solar-roof.jpg";
import accessories from "./../assets/images/accessories.jpg";

function Home() {
  return (
    <Container>
      <Section title="Model 3" backgroundImage={model3} />
      <Section title="Model Y" backgroundImage={modelY} />
      <Section title="Model S" backgroundImage={modelS} />
      <Section title="Model X" backgroundImage={modelX} />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImage={solarPanel}
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage={solarRoof}
      />
      <Section
        title="Solar Roof"
        description=""
        leftButtonText="Shop Now"
        RightButtonText=""
        backgroundImage={accessories}
        isArrowButton={false}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;
