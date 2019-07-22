import React from 'react';
import styled from 'styled-components';
import Card from '../../global/Card';
import { ThemeColors, GlobalContainer, H1, H3 } from '../../../styles/elements';
import { maxWidth } from '../../../styles/utils';
import OrderButton from '../OrderButton';

export default function Stones({ value }) {
	return (
		<GlobalContainer>
			<StonesContainer id='stones'>
				<H1 centerText>
					<span>Stenen</span>
				</H1>
				<H3 centerText>
					Verkrijgbaar van 60 tot 300 gram, onderverdeeld in klassen van 30
					gram, bij een bestelling van 10 stenen ontvangt u er één gratis
				</H3>
				<Cards>
					{value.products.stones.map(stone => (
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
			</StonesContainer>
		</GlobalContainer>
	);
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
