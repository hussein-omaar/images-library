import React from "react";
import backgroundVideo from "./../../assets/bg.mp4";

import { HeroSection, HeroSectionContainer, BgVideo } from "./StyledHeroSec";

function Hero() {
  return (
    <>
      <HeroSection>
        {/* <HeroSectionContainer> */}
          <BgVideo  autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </BgVideo>

        {/* </HeroSectionContainer> */}
      </HeroSection>
    </>
  );
}

export default Hero;
