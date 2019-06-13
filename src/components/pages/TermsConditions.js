import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../layout/Layout';
import styled from 'styled-components';
import { GlobalContainer, H2, P, ThemeColors } from '../../styles/elements';

export default function TermsConditions() {
	return (
		<Layout navBarFixed={true} navLinks={navLinks}>
			<GlobalContainer>
				<TermsContainer>
					<H2 color={ThemeColors.green}>Algemene voorwaarden</H2>
					<H2 color={ThemeColors.black}>Inhoudsopgave</H2>
					<NavLink to='#art01'>Artikel 1 - Definities</NavLink>
					<br />
					<a href='#art02'>Artikel 2 - Identiteit van de ondernemer</a>
					<br />
					<a href='#art03'>Artikel 3 - Toepasselijkheid</a>
					<br />
					<a href='#art04'>Artikel 4 - Het aanbod</a>
					<br />
					<a href='#art05'>Artikel 5 - De overeenkomst</a>
					<br />
					<a href='#art06'>Artikel 6 - Herroepingsrecht</a>
					<br />
					<a href='#art07'>
						Artikel 7 - Verplichtingen van de consument tijdens de bedenktijd
					</a>
					<br />
					<a href='#art08'>
						Artikel 8 - Uitoefening van het herroepingsrecht door de consument
						en kosten daarvan
					</a>
					<br />
					<a href='#art09'>
						Artikel 9 - Verplichtingen van de ondernemer bij herroeping
					</a>
					<br />
					<a href='#art10'>Artikel 10 - Uitsluiting herroepingsrecht</a>
					<br />
					<a href='#art11'>Artikel 11 - De prijs</a>
					<br />
					<a href='#art12'>Artikel 12 - Nakoming en extra garantie</a>
					<br />
					<a href='#art13'>Artikel 13 - Levering en uitvoering</a>
					<br />
					<a href='#art14'>
						Artikel 14 - Duurtransacties: duur, opzegging en verlenging
					</a>
					<br />
					<a href='#art15'>Artikel 15 - Betaling</a>
					<br />
					<a href='#art16'>Artikel 16 - Klachtenregeling</a>
					<br />
					<a href='#art17'>Artikel 17 - Geschillen</a>
					<br />
					<a href='#art18'>Artikel 18 - Aanvullende of afwijkende bepalingen</a>
					<br />
					<br />
					<ul id='art01'>
						<strong>Artikel 1 - Definities </strong>
						<br />
						In deze voorwaarden wordt verstaan onder:
						<br />
						<br />
						<li>
							<strong>Aanvullende overeenkomst: </strong>
							een overeenkomst waarbij de consument producten, digitale inhoud
							en/of diensten verwerft in verband met een overeenkomst op afstand
							en deze zaken, digitale inhoud en/of diensten door de ondernemer
							worden geleverd of door een derde partij op basis van een afspraak
							tussen die derde en de ondernemer;
						</li>
						<li>
							<strong>Bedenktijd: </strong>
							de termijn waarbinnen de consument gebruik kan maken van zijn
							herroepingsrecht;
						</li>
						<li>
							<strong>Consument: </strong>
							de natuurlijke persoon die niet handelt voor doeleinden die
							verband houden met zijn handels-, bedrijfs-, ambachts- of
							beroepsactiviteit;
						</li>
						<li>
							<strong>Dag: </strong>kalenderdag;
						</li>
						<li>
							<strong>Digitale inhoud: </strong>gegevens die in digitale vorm
							geproduceerd en geleverd worden;
						</li>
						<li>
							<strong>Duurovereenkomst: </strong>
							een overeenkomst die strekt tot de regelmatige levering van zaken,
							diensten en/of digitale inhoud gedurende een bepaalde periode;
						</li>
						<li>
							<strong>Duurzame gegevensdrager: </strong>
							elk hulpmiddel - waaronder ook begrepen e-mail - dat de consument
							of ondernemer in staat stelt om informatie die aan hem persoonlijk
							is gericht, op te slaan op een manier die toekomstige raadpleging
							of gebruik gedurende een periode die is afgestemd op het doel
							waarvoor de informatie is bestemd, en die ongewijzigde reproductie
							van de opgeslagen informatie mogelijk maakt;
						</li>
						<li>
							<strong>Herroepingsrecht: </strong>
							de mogelijkheid van de consument om binnen de bedenktijd af te
							zien van de overeenkomst op afstand;
						</li>
						<li>
							<strong>Ondernemer: </strong>
							de natuurlijke of rechtspersoon die producten, (toegang tot)
							digitale inhoud en/of diensten op afstand aan consumenten
							aanbiedt;
						</li>
						<li>
							<strong>Overeenkomst op afstand: </strong>
							een overeenkomst die tussen de ondernemer en de consument wordt
							gesloten in het kader van een georganiseerd systeem voor verkoop
							op afstand van producten, digitale inhoud en/of diensten, waarbij
							tot en met het sluiten van de overeenkomst uitsluitend of mede
							gebruik gemaakt wordt van één of meer technieken voor communicatie
							op afstand;
						</li>
						<li>
							<strong>Modelformulier voor herroeping: </strong>
							het in Bijlage I van deze voorwaarden opgenomen Europese
							modelformulier voor herroeping. Bijlage I hoeft niet ter
							beschikking te worden gesteld als de consument ter zake van zijn
							bestelling geen herroepingsrecht heeft;
						</li>
						<li>
							<strong>Techniek voor communicatie op afstand: </strong>
							middel dat kan worden gebruikt voor het sluiten van een
							overeenkomst, zonder dat consument en ondernemer gelijktijdig in
							dezelfde ruimte hoeven te zijn samengekomen.
						</li>
					</ul>
				</TermsContainer>
			</GlobalContainer>
		</Layout>
	);
}

const navLinks = [
	{ title: 'Wat we doen', id: 'about' },
	{ title: 'Product', id: 'product' },
	{ title: 'Wie we zijn', id: 'who' },
	{ title: 'Contact', id: 'contact' }
];

const TermsContainer = styled.div`
	margin-top: 75px;
`;
