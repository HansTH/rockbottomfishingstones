import React from 'react';
import Layout from '../layout/Layout';
import styled from 'styled-components';
import {
	GlobalContainer,
	H2,
	P,
	ThemeColors,
	PrimaryButton,
	Gab
} from '../../styles/elements';
import termsData from './termsData';

export default function AboutInfo({ history }) {
	return (
		<Layout navBarFixed={true} navLinks={navLinks}>
			<Info>
				<GlobalContainer>
					<Gab height='1rem' />
					<PrimaryButton onClick={() => history.go(-1)}>Ga terug</PrimaryButton>
					<H2 color={ThemeColors.green}>Gegevens</H2>
					{termsData[1].content}
					<H2 color={ThemeColors.green}>Disclaimer</H2>
					<P>
						Wij doen onze best om alles op onze website zo juist en volledig
						mogelijk weer te geven, maar het kan wel eens zijn dat dit niet
						helemaal lukt. In dat geval is Rockbottom Rockbottom .com niet
						aansprakelijk voor de gevolgen van activiteiten die ondernomen
						worden op basis van deze website.
					</P>

					<H2 color={ThemeColors.green}>Copyright</H2>
					<P>
						Het is niet toegestaan om zonder voorafgaande schriftelijke
						toestemming van Rockbottom Fishingstones, materiaal dat zich op de
						Rockbottom website bevindt, te kopiëren, opnieuw te verspreiden, te
						publiceren of te wijzigen.
					</P>
				</GlobalContainer>
			</Info>
		</Layout>
	);
}

const navLinks = [
	{ title: 'Wat we doen', id: 'about' },
	{ title: 'Product', id: 'product' },
	{ title: 'Wie we zijn', id: 'who' },
	{ title: 'Contact', id: 'contact' }
];

const Info = styled.div`
	margin-top: 75px;

	li {
		list-style-type: none;
	}
`;
