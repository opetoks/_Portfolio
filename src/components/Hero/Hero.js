import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br />
        Welcome to my Profile page 
      </SectionTitle>
       
      <SectionText>
      I'm a Software | Cloud Engineer and the co-founder, Opykins Solutions. I write and deploy clean and 
      efficient code to automate processes. Full Stack Web Development is also my passion. 
      </SectionText>
      <Button onClick={() => window.location = 'https://linkedin.com'}>View my Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;