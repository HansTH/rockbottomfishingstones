import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from './layout/Layout';
import { ThemeColors, GlobalContainer } from '../styles/elements';

export default class Order extends Component {
	render() {
		return (
			<OrderContainer>
				<Layout>
					<OrderWrapper>
						<OrderTitle>Binnenkort kunt u onze producten bestellen.</OrderTitle>
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
`;
const OrderTitle = styled.h1`
	margin: 4rem 0;
	font-size: 2rem;
	color: ${ThemeColors.white};
`;
