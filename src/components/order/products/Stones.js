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
import { Consumer } from '../../../contextAPI/context';
import { ADD_TO_ORDERLIST } from '../../../contextAPI/types';

export default class Stones extends Component {
  addToOrderlist = (order, dispatch) => {
    dispatch({ type: ADD_TO_ORDERLIST, payload: order });
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <GlobalContainer>
              <StonesContainer id='stones'>
                <H1 centerText>
                  <span>Stenen</span>
                </H1>
                <H3 centerText>
                  Verkrijgbaar van 60 tot 300 gram, onderverdeeld in klassen van
                  30 gram, bij een bestelling van 10 stenen ontvangt u er één
                  gratis
                </H3>
                <Cards>
                  {value.products.stones.map(stone => (
                    <Card
                      key={stone.title}
                      image={stone.image}
                      title={stone.title}
                      description={stone.info}>
                      <DarkButton
                        centerText={true}
                        bold={true}
                        block='true'
                        color={ThemeColors.black}
                        onClick={() =>
                          this.addToOrderlist(stone, value.dispatch)
                        }>
                        €{stone.price.toFixed(2)}
                      </DarkButton>
                    </Card>
                  ))}
                </Cards>
              </StonesContainer>
            </GlobalContainer>
          );
        }}
      </Consumer>
    );
  }
}

const StonesContainer = styled.section`
  position: relative;
  background-color: ${ThemeColors.white};
  padding-top: 5rem;
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
