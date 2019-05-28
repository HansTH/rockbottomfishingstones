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

export default class PlugInWartel extends Component {
  handleOrder = item => {
    this.props.item(item);
  };

  render() {
    return (
      <GlobalContainer>
        <PluginWartelContainer>
          <H1 centerText>
            <span>Plug-in Wartels</span>
          </H1>
          <H3 centerText>Maat 8 wartels en worden geleverd per 10 stuks.</H3>
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
        </PluginWartelContainer>
      </GlobalContainer>
    );
  }
}

const PluginWartelContainer = styled.section`
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
    id: 'RBFSpluginwartel',
    image:
      'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766527/rbfs/RBFS-PlugInWartel.jpg',
    title: 'Maat 8',
    price: 2.5,
    itemQuantity: 10,
    info:
      'Maat 8 wartels die perfect passen in de plug-in. Voor gebruik op de onderlijn of aan een leader verlenging. Worden geleverd per 10 stuks.'
  }
];
