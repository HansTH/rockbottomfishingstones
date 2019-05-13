import React from 'react';
import styled from 'styled-components';
import { H3, P, ThemeColors } from '../styles/elements';
import { maxWidth } from '../styles/utils';

export default function Card({ image, title, description }) {
  return (
    <CardContainer>
      <Cardimage src={image} />
      <CardContent>
        <H3 centerText={true} color={ThemeColors.green}>
          {title}
        </H3>
        <P>{description}</P>
      </CardContent>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 1rem auto;
  background-color: ${ThemeColors.white};
  border-radius: 5px;
  box-shadow: 2px 2px 15px rgba(51, 51, 51, 0.5);

  ${maxWidth.small`
    width: 90%;
  `}
`;

const CardContent = styled.div`
  padding: 0 0.5rem;
`;

const Cardimage = styled.img`
  width: 100%;
  border-radius: 5px 5px 0px 0px;
`;
