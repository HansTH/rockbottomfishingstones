import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import {
  ThemeColors,
  DarkButton,
  GlobalContainer,
  H1,
  H3
} from '../../styles/elements';
import { maxWidth } from '../../styles/utils';

export default class TopStones extends Component {
  handleOrder = item => {
    this.props.item(item);
  };

  render() {
    return (
      <GlobalContainer>
        <TopStonesContainer>
          <H1 centerText>
            <span>Topsteentjes</span>
          </H1>
          <H3 centerText>
            Verkrijgbaar in twee maten en worden geleverd per 3 stuks.
          </H3>
          <Cards>
            {stonesData.map(stone => (
              <Card
                key={stone.title}
                image={stone.image}
                title={stone.title}
                description={stone.info}>
                <DarkButton
                  bold
                  block='true'
                  color={ThemeColors.black}
                  onClick={() => this.handleOrder(stone)}>
                  €{stone.price.toFixed(2)}
                </DarkButton>
              </Card>
            ))}
          </Cards>
        </TopStonesContainer>
      </GlobalContainer>
    );
  }
}

const TopStonesContainer = styled.section`
  position: relative;
  background-color: ${ThemeColors.white};
  padding-top: 2rem;
  padding-bottom: 1rem;

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
    id: 'RBFStopstone20',
    image:
      'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766528/rbfs/RBFS-Topstones-small.jpg',
    title: 'Klein 20 gram',
    price: 3.0,
    itemQuantity: 3,
    info:
      'Deze backstones zijn ideaal voor het afzinken van de lijn. Voorzien met eenvoudige clip en zo snel te bevestigen. Worden geleverd per 3 stuks.'
  },
  {
    id: 'RBFStopstone40',
    image:
      'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766528/rbfs/RBFS-Topstones-large.jpg',
    title: 'Groot 40 gram',
    price: 3.0,
    itemQuantity: 3,
    info:
      'Deze backstones zijn ideaal voor het afzinken van de lijn. Voorzien met eenvoudige clip en zo snel te bevestigen. Worden geleverd per 3 stuks.'
  }
];
