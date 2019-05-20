import React from 'react';
import styled from 'styled-components';
import {
	GlobalContainer,
	H1,
	ThemeColors,
	NavLinkButton
} from '../styles/elements';
import { maxWidth, minWidth } from '../styles/utils';
import RBFSstones from '../assets/RBFS-Stones.jpg';
import RBFStopstones from '../assets/RBFS-Topstones.jpg';
import RBFSleadinglink from '../assets/RBFS-LeaderLink.jpg';
import RBFSpluginwartel from '../assets/RBFS-PluginWartel.jpg';
import Card from './Card';

export default function Product() {
	return (
		<ProductContainer id='product'>
			<GlobalContainer>
				<H1 centerText={true} color='#eee'>
					Producten
				</H1>
				<ProductItems>
					{productData.map(product => (
						<Card
							key={product.title}
							image={product.image}
							title={product.title}
							description={product.info}
						>
							<NavLinkButton to='/order' block='true' color={ThemeColors.black}>
								Bestellen
							</NavLinkButton>
						</Card>
					))}
				</ProductItems>
			</GlobalContainer>
		</ProductContainer>
	);
}

const ProductContainer = styled.section`
	background-color: ${ThemeColors.green};
	padding-top: 5rem;
	padding-bottom: 1rem;

	${maxWidth.small`
    padding-top: 3rem;
  `}
`;

const ProductItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	${maxWidth.small`
    flex-direction: column;
  `}
`;

const productData = [
	{
		image: RBFSstones,
		title: 'Rockbottom Stenen',
		info:
			'Verkrijgbaar van 60 tot 300 gram, ingedeeld in klassen van 30 gram. Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.'
	},
	{
		image: RBFStopstones,
		title: 'Rockbottom Topsteentjes',
		info:
			'Deze backstones zijn ideaal voor het afzinken van de lijn. Voorzien met eenvoudige clip en zo snel te bevestigen. Verkrijgbaar in twee maten. Op aanvraag worden andere gewichten geleverd. Worden geleverd vanaf 3 stuks.'
	},
	{
		image: RBFSleadinglink,
		title: 'Rockbottom Leader-link',
		info:
			'Rockbottom stenen zijn op verschillende manieren te bevestigen. Een daarvan is door het verlengen van de leader. Niet iedereen is handig in het splicen van leadermateriaal. Daarom hebben wij het al gedaan. Worden geleverd per 3 stuks.'
	},
	{
		image: RBFSpluginwartel,
		title: 'Rockbottom Plug-in wartels',
		info:
			'Maat 8 wartels die perfect passen in de plug-in. Voor gebruik op de onderlijn of aan een leader verlenging. Worden geleverd per 10 stuks.'
	}
];
