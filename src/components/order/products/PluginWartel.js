import React from 'react';
import styled from 'styled-components';
import Card from '../../global/Card';
import { ThemeColors, GlobalContainer, H1, H3 } from '../../../styles/elements';
import { maxWidth } from '../../../styles/utils';
import OrderButton from '../OrderButton';

export default function PlugInWartel({ value }) {
	return (
		<GlobalContainer>
			<PluginWartelContainer id='pluginWartel'>
				<H1 centerText>
					<span>Plug-in Wartels</span>
				</H1>
				<H3 centerText>Maat 8 wartels en worden geleverd per 10 stuks.</H3>
				<Cards>
					{value.products.pluginWartel.map(stone => (
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
			</PluginWartelContainer>
		</GlobalContainer>
	);
}

const PluginWartelContainer = styled.section`
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
