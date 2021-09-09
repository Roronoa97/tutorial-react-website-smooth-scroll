import React from "react";
import Img1 from '../../images/img1.svg'
import Img2 from '../../images/img2.svg'
import Img3 from '../../images/img3.svg'

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElement";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Img1}></ServicesIcon>
          <ServicesH2>Reduce expences</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Img2}></ServicesIcon>
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Img3}></ServicesIcon>
          <ServicesH2>Premium Benefit</ServicesH2>
          <ServicesP>
            Unlock our special membership card that return 5% cash back
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
