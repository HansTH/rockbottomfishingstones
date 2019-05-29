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

export default class Stones extends Component {
  handleOrder = order => {
    this.props.item(order);
  };

  render() {
    return (
      <GlobalContainer>
        <StonesContainer id='stones'>
          <H1 centerText>
            <span>Stenen</span>
          </H1>
          <H3 centerText>
            Verkrijgbaar van 60 tot 300 gram, onderverdeeld in klassen van 30
            gram.
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
        </StonesContainer>
      </GlobalContainer>
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

const stonesData = [
  {
    id: 'RBFSstone61-90',
    image:
      'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766527/rbfs/RBFS-Stones60.jpg',
    title: '61 - 90 gram',
    price: 1.4,
    itemQuantity: 1,
    info:
      'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
    category: 'RBFS steen'
  },
  {
    id: 'RBFSstone91-120',
    image:
      'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766529/rbfs/RBFS-Stones90.jpg',
    title: '91 - 120 gram',
    price: 1.4,
    itemQuantity: 1,
    info:
      'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
    category: 'RBFS steen'
  },
  {
    id: 'RBFSstone121-150',
    image:
      'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766527/rbfs/RBFS-Stones120.jpg',
    title: '121 - 150 gram',
    price: 1.4,
    itemQuantity: 1,
    info:
      'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
    category: 'RBFS steen'
  },
  {
    id: 'RBFSstone151-180',
    image:
      'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766528/rbfs/RBFS-Stones150.jpg',
    title: '151 - 180 gram',
    price: 1.4,
    itemQuantity: 1,
    info:
      'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
    category: 'RBFS steen'
  },
  {
    id: 'RBFSstone181-210',
    image:
      'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766527/rbfs/RBFS-Stones180.jpg',
    title: '181 - 210 gram',
    price: 1.4,
    itemQuantity: 1,
    info:
      'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
    category: 'RBFS steen'
  },
  {
    id: 'RBFSstone211-240',
    image:
      'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766528/rbfs/RBFS-Stones210.jpg',
    title: '211 - 240 gram',
    price: 1.4,
    itemQuantity: 1,
    info:
      'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
    category: 'RBFS steen'
  },
  {
    id: 'RBFSstone241-270',
    image:
      'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766528/rbfs/RBFS-Stones240.jpg',
    title: '241 - 270 gram',
    price: 1.4,
    itemQuantity: 1,
    info:
      'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
    category: 'RBFS steen'
  },
  {
    id: 'RBFSstone271-300',
    image:
      'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766528/rbfs/RBFS-Stones270.jpg',
    title: '271 - 300 gram',
    price: 1.4,
    itemQuantity: 1,
    info:
      'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
    category: 'RBFS steen'
  }
];
