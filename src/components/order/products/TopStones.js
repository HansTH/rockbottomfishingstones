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

export default class TopStones extends Component {
	addToOrderlist = (order, dispatch) => {
		dispatch({ type: ADD_TO_ORDERLIST, payload: order });
	};

	render() {
		return (
			<Consumer>
				{value => {
					return (
						<GlobalContainer>
							<TopStonesContainer id='topstones'>
								<H1 centerText>
									<span>Topsteentjes</span>
								</H1>
								<H3 centerText>
									Verkrijgbaar in twee maten en worden geleverd per 3 stuks.
								</H3>
								<Cards>
									{value.products.topStones.map(stone => (
										<Card
											key={stone.title}
											image={stone.image}
											title={stone.title}
											description={stone.info}
										>
											<DarkButton
												centerText={true}
												bold={true}
												block='true'
												color={ThemeColors.black}
												onClick={() =>
													this.addToOrderlist(stone, value.dispatch)
												}
											>
												Bestellen €{stone.price.toFixed(2)}
											</DarkButton>
										</Card>
									))}
								</Cards>
							</TopStonesContainer>
						</GlobalContainer>
					);
				}}
			</Consumer>
		);
	}
}

const TopStonesContainer = styled.section`
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
