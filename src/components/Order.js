import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from './layout/Layout';
import { ThemeColors } from '../styles/elements';
import { maxWidth } from '../styles/utils';

export default class Order extends Component {
  render() {
    return (
      <OrderContainer>
        <Layout>
          <OrderWrapper>
            <OrderTitle color={ThemeColors.white} size={2}>
              Binnenkort kunt u onze producten bestellen.
            </OrderTitle>
            <OrderTitle color={ThemeColors.black} size={1.5}>
              Kunt u niet wachten, neem dan contact met ons op.
            </OrderTitle>
          </OrderWrapper>
        </Layout>
      </OrderContainer>
    );
  }
}

const OrderContainer = styled.div`
  position: absolute;
`;

const OrderWrapper = styled.div`
  background-color: ${ThemeColors.green};
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;

  ${maxWidth.small`
		text-align: center;
  `}
`;

const OrderTitle = styled.h1`
  margin: 2rem 0;
  font-size: ${({ size }) => `${size}rem`};
  color: ${({ color }) => color};

  ${maxWidth.small`
		font-size: ${({ size }) => `${size / 1.2}rem`};
  `}
`;
