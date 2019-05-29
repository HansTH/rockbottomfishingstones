import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../../global/Card';
import {
  ThemeColors,
  DarkButton,
  GlobalContainer,
  H1,
  H3
} from '../../../styles/elements';
import { maxWidth } from '../../../styles/utils';

export default class LeaderLink extends Component {
  handleOrder = item => {
    this.props.item(item);
  };

  render() {
    return (
      <GlobalContainer>
        <LeaderLinkContainer>
          <H1 centerText>
            <span>Leader Link</span>
          </H1>
          <H3 centerText>
            Om onze stenen mee te bevestigen en worden geleverd per 3 stuks.
          </H3>
          <Cards>
            {stonesData.map(stone => (
              <Card
                key={stone.title}
                image={stone.image}
                title={stone.title}
                description={stone.info}>
                <DarkButton
                  bold={true}
                  block='true'
                  color={ThemeColors.black}
                  onClick={() => this.handleOrder(stone)}>
                  €{stone.price.toFixed(2)}
                </DarkButton>
              </Card>
            ))}
          </Cards>
        </LeaderLinkContainer>
      </GlobalContainer>
    );
  }
}

const LeaderLinkContainer = styled.section`
  background-color: ${ThemeColors.white};
  padding-top: 2rem;
  padding-bottom: 1rem;
  margin: 0 auto;

  span {
    color: ${ThemeColors.green};
  }

  ${maxWidth.small`
    padding-top: 3rem;
  `}
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const stonesData = [
  {
    id: 'RBFSleaderlink',
    image:
      'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766527/rbfs/RBFS-LeaderLink.jpg',
    title: 'Leader Link Lengte 10cm',
    price: 3.0,
    itemQuantity: 3,
    info:
      'Rockbottom stenen zijn op verschillende manieren te bevestigen. Een daarvan is door het verlengen van de leader. Niet iedereen is handig in het splicen van leadermateriaal. Daarom hebben wij het al gedaan. Worden geleverd per 3 stuks.'
  }
];
