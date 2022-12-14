import React from "react";
import backgroundVideo from "./../../assets/bg.mp4";

import { HeroContainer, HeroBg , BgVideo , HeroContent , H1Text , HeroBtnWraper ,  HeroBtn } from "./StyledHeroSec";

function Hero() {
  return (
    <>
      <HeroContainer>
        {/* <HeroSectionContainer> */}

        <HeroBg>
          <BgVideo  autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </BgVideo>
          </HeroBg>

          <HeroContent>
            <H1Text>the largest community of photo enthusiasts</H1Text>
            <HeroBtnWraper>

            <HeroBtn>join today</HeroBtn>

            </HeroBtnWraper>
  
          </HeroContent>
        

        {/* </HeroSectionContainer> */}
      </HeroContainer>
    </>
  );
}

export default Hero;
