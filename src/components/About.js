import React from 'react';
import styled from 'styled-components';
import { GlobalContainer, H1, H2, P, ThemeColors } from '../styles/elements';
import { maxWidth } from '../styles/utils';

export default function About() {
	return (
		<AboutContainer id='about'>
			<GlobalContainer>
				<H1 centerText={true}>
					<span>Wat</span> we doen
				</H1>
				<H2>De nieuwe Steentijd…</H2>
				<P>
					Rockbottom fishingstones zijn een goed, eenvoudig, goedkoop en
					multifunctioneel te gebruiken alternatief voor het vissen met lood.
					Door met deze stenen te vissen draag je bij aan een duurzame en
					milieuvriendelijke visserij zonder concessies te doen aan je eigen
					visserij. Het gebruik van stenen is een kleine aanpassing, maar een
					zeer doeltreffende en eenvoudige manier om karper te vangen.
				</P>
				<P>
					Het idee van Rockbottom fishingstones is ontstaan aan de oevers van
					een water met dressuurgevoelige vis die hoofdzakelijk belaagd werden
					met het drop-off systeem. De effectiviteit van dit systeem heeft zich
					duidelijk bewezen. Het grote nadeel dat hier aan kleeft is dat het
					lood achterblijft op de bodem. Het achterlaten van afval op de oever
					wordt door de meesten van ons niet geaccepteerd. Waarom kunnen we dan
					wel een stuk lood achterlaten op de bodem? En dan hebben we het nog
					niet eens over het giftige aspect dat het milieu niet ten goede komt….
				</P>
				<P>
					Onze Rockbottem fishingstones zijn op een eenvoudige manier veelzijdig
					te gebruiken. Bevestiging enkel aan de wartel is mogelijk, zoals een
					gewoon wartellood. Al onze stenen zijn naast een wartel voorzien van
					een busje waarin een one-eye swivel maat 8 geschoven kan worden. Dit
					maakt het mogelijk om met een verlengde onderlijn of verlenging van de
					leader, in combinatie met een one-eye swivel, het volle gewicht van de
					steen over te brengen op de haakpunt bij de opname van het aas. Door
					het kopschudden zal de wartel los komen en de steen aan de wartel
					blijven hangen. Vervolgens kan men zelf kiezen om de steen drop-off in
					te zetten.
				</P>
			</GlobalContainer>
		</AboutContainer>
	);
}

const AboutContainer = styled.section`
	/* position: relative; */
	background-color: ${ThemeColors.white};
	padding: 5rem 0;

	${maxWidth.small`
    padding: 3rem 0;
  `}

	span {
		color: ${ThemeColors.green};
	}
`;
