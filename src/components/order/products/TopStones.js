import React from 'react';
import styled from 'styled-components';
import Card from '../../global/Card';
import { ThemeColors, GlobalContainer, H1, H3 } from '../../../styles/elements';
import { maxWidth } from '../../../styles/utils';
import OrderButton from '../OrderButton';

export default function TopStones({ value }) {
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
							<OrderButton value={value} product={stone} />
						</Card>
					))}
				</Cards>
			</TopStonesContainer>
		</GlobalContainer>
	);
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
