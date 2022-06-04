import { CircleBadge } from '@graffft-waggle/circle-badge';
import { Container } from '@graffft-waggle/container';
import { Icon, IconMap } from '@graffft-waggle/icon';
import { Image } from '@graffft-waggle/image';
import { SocialBanner } from '@graffft-waggle/social-banner';
import * as React from 'react';
// import { Card } from '@graffft-waggle/card';
import { currentTechIcons, socialLinks } from './constants';
import {
  HeroContainerSt,
  HomeHeroImageBlockWrapperSt,
  HomeHeroLeadTextSt,
  HomeHeroSubTextSt,
  HomeHeroTextWrapperSt,
  HomeSocialContactWrapperSt,
  SectionHomeTechStackModuleWrapperSt,
} from './Home.styles';

const synth = window.speechSynthesis;
const saySomething = (text: string) => () => {
  const utter = new SpeechSynthesisUtterance(text);
  synth.speak(utter);
};

export const Home = () => (
  <>
    <section>
      <HeroContainerSt>
        <HomeHeroTextWrapperSt>
          <HomeHeroLeadTextSt>My name is Dan</HomeHeroLeadTextSt>
          <HomeHeroSubTextSt>
            I'm a terrible software engineer, but I like to woof. Hire me at
            your own risk. Ontogeny recapitulates phylogeny. Wau wau. Nur die
            Fülle führt zur Klarheit, und im Abgrund wohnt die Wahrheit. Give me
            a squeak toy.
          </HomeHeroSubTextSt>
        </HomeHeroTextWrapperSt>
        <HomeHeroImageBlockWrapperSt>
          {/* image component needs breakpoints for aspect ratios */}
          {/* ${aspectRatio(210, 235)} */}
          <Image
            aspectRatio={{ width: 536, height: 599 }}
            imgSrc="https://i.pinimg.com/originals/d2/6b/0a/d26b0a6836f7a073d1ef0d322f6599d5.jpg"
            imgAlt="puppy"
          />
        </HomeHeroImageBlockWrapperSt>
      </HeroContainerSt>
    </section>
    {/* <section>
      <Container>
        <HomeHeroProjectsSectionSt>
          <HomeHeroProjectsTitleSectionSt>
            Projects
          </HomeHeroProjectsTitleSectionSt>
          <div style={{ marginBottom: '20px' }}>
            <Card {...dummyCardProps} />
          </div> 
        </HomeHeroProjectsSectionSt>
      </Container>
    </section> */}

    <SectionHomeTechStackModuleWrapperSt>
      <Container>
        {currentTechIcons.map((icon) => (
          <CircleBadge key={icon} handleClick={saySomething(icon)}>
            <Icon
              title={icon}
              size="calc(100% - 40px)"
              color={IconMap.get(icon)?.defaultColor}
            />
          </CircleBadge>
        ))}
      </Container>
    </SectionHomeTechStackModuleWrapperSt>
    <section>
      <Container>
        <HomeSocialContactWrapperSt>
          <SocialBanner
            linkSize={52}
            itemMargin="0 12px"
            paddingSize={10}
            buttonLinks={socialLinks}
          />
        </HomeSocialContactWrapperSt>
      </Container>
    </section>
  </>
);
