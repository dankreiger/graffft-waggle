import styled from 'styled-components';
import { Gradients, media } from '@graffft-waggle/themes-portfolio';
import { SectionWrapperSt, smallReset } from '../../shared/common';
import { Container } from '@graffft-waggle/container';

// hero section
export const HeroContainerSt = styled(Container)`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  margin-bottom: 95px;
  overflow: hidden;

  ${media.md`
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 50px;
  `}
`;

export const HomeHeroTextWrapperSt = styled.div`
  order: 1;
  ${media.md`
    order: 0;
    align-self: center;
    padding-bottom: 50px;
  `}
`;
export const HomeHeroLeadTextSt = styled.h2`
  ${smallReset}
  font-size: 40px;
  margin-bottom: 20px;
`;
export const HomeHeroSubTextSt = styled.p`
  ${smallReset}
  font-family: 'IBM Plex Mono';
  font-size: 21px;
  letter-spacing: 1.25;
  line-height: 1.56;
`;

export const HomeHeroImageBlockWrapperSt = styled.div`
  display: none;
  ${media.md`
    display: block;
    height: 435px;
  `}
  ${media.lg`
    height: 559px;
  `}
`;

// projects section
export const HomeHeroProjectsSectionSt = styled(SectionWrapperSt)``;

export const HomeHeroProjectsTitleSectionSt = styled.h2`
  ${smallReset}
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: 'Barlow';
  font-size: 25px;

  ${media.md`
    font-size: 44px;
  `}
`;

// category stack section
export const SectionHomeTechStackModuleWrapperSt = styled.section`
  display: flex;
  align-items: center;
  background: ${Gradients.Primary};
  height: 300px;
  overflow: hidden;
  > div {
    min-width: 1140px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }
`;

// contact section
export const HomeSocialContactWrapperSt = styled.div<{
  heightStyle?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ heightStyle }) => heightStyle || '356px'};
`;
