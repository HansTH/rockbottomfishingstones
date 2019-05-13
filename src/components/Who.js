import React from 'react';
import styled from 'styled-components';
import marc from '../assets/marc.jpg';
import { H2, P, ThemeColors } from '../styles/elements';
import { maxWidth } from '../styles/utils';

export default function Who() {
  return (
    <WhoContainer id='who'>
      <WhoPerson>
        <WhoImage image={marc} />
        <WhoInfo>
          <H2 color='#7ab436'>Marc ter Horst</H2>
          <P>
            Van kind af aan vooral aan de waterkant te vinden. In het begin met
            de vaste stok op witvis. Maar al gauw verslingerd aan de karper.
            Opgegroeid met het Twentekanaal om de hoek. Veel gevangen, veel
            geleerd, veel vissers ontmoet. Al voor de boilietijdperk belaagde ik
            de karper met havermoutdeeg of gekookte bintjes. Ik heb ondertussen
            alle ontwikkelingen in onze hobby meegemaakt en heb daar veel
            gevangen vis aan te danken. Een van de laatste trends is het gebruik
            van Drop-off systemen in combinatie met lood. In een tijd waar
            duurzaamheid voorop staat kunnen wij letterlijk een steentje
            bijdragen door gebruik te maken van alternatieven……
          </P>
        </WhoInfo>
      </WhoPerson>
    </WhoContainer>
  );
}

const WhoContainer = styled.section`
  padding-top: 4rem;
  padding-bottom: 2rem;
  background-color: ${ThemeColors.green};

  span {
    color: ${ThemeColors.green};
  }
`;

const WhoImage = styled.div`
  top: 0;
  left: 0;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 50%;

  ${maxWidth.small`
    width: 200px;
    height: 200px;
    margin: 1rem;
    background-size: cover;
    border-radius: 50%;
  `}
`;

const WhoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 1rem;
  padding-bottom: 2rem;

  h1 {
    ${maxWidth.small`
    padding-top: 1rem;
  `}
  }

  p {
    width: 80%;
  }
  ${maxWidth.small`
    width: 100%;
    align-items: center;
    text-align: center;
  `}
`;

const WhoPerson = styled.div`
  display: flex;
  min-height: 500px;
  color: ${ThemeColors.white};
  background-color: ${ThemeColors.black};

  ${maxWidth.small`
    align-items: center;
    flex-direction: column;
    min-height: 0;
  `}
`;
