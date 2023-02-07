import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './AcomplishmentsStyles';

const data = [
  {  text: 'Open Source Projects'},
  {  text: 'Clear > Detailed Focused > Practical', },
  {  text: 'Part-time Developer Full-time Innovative ', },
  {  text: '"Moving Onwards and Upwards"',}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishmets</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
         
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;