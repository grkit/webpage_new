import React from 'react';
import Footer from '../Footer/Footer';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi <br />
          I'm Gurkirat !
        </SectionTitle>
        <SectionText>
        I am extremely delighted to see that you landed on my page today. I am 
        an autodidact FED with experince in webpage creation using the present-day UI. 
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;