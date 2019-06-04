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

export default class LeaderLink extends Component {
  addToOrderlist = (order, dispatch) => {
    dispatch({ type: ADD_TO_ORDERLIST, payload: order }),
      () => console.log(value.orderlist);
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <GlobalContainer>
              <LeaderLinkContainer id='leaderLink'>
                <H1 centerText>
                  <span>Leader Link</span>
                </H1>
                <H3 centerText>
                  Om onze stenen mee te bevestigen en worden geleverd per 3
                  stuks.
                </H3>
                <Cards>
                  {value.products.leaderLink.map(stone => (
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
              </LeaderLinkContainer>
            </GlobalContainer>
          );
        }}
      </Consumer>
    );
  }
}

const LeaderLinkContainer = styled.section`
  background-color: ${ThemeColors.white};
  padding-top: 5rem;
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
