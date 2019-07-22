import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import OrderForm from './OrderForm';
import { P, ThemeColors, GlobalContainer } from '../../styles/elements';
import Stones from './products/Stones';
import TopStones from './products/TopStones';
import PluginWartel from './products/PluginWartel';
import LeaderLink from './products/LeaderLink';
import { Consumer } from '../../contextAPI/context';

export default function Order({ history }) {
	return (
		<Consumer>
			{value => {
				return (
					<Layout navBarFixed={true} navLinks={navLinks}>
						<OrderContainer>
							<OrderInfo>
								<GlobalContainer>
									<P>
										Rockbottom fishingstones is een nieuwe onderneming die meer
										idealistisch ingesteld is dan commercieel. We blijven verder
										ontwikkelen om zo duurzaam en milieuvriendelijk onze
										producten aan te bieden. We proberen daarbij onze prijzen zo
										laag mogelijk te houden. Momenteel hanteren wij
										introductieprijzen.
									</P>
									<P>
										Bestellen kan eenvoudig door het bestelformulier in te
										vullen en het bedrag over te maken. Vervolgens gaan wij aan
										het werk en proberen dat u binnen een week onze producten
										aan de waterkant kunt gebruiken.
									</P>
									<P>
										Wij schuwen geen kritiek. Hebt u iets aan te merken of tips
										en ideeën ter verbetering, geef het ons door op
										info@rockbottomfishingstones.com.
									</P>
								</GlobalContainer>
							</OrderInfo>
							<OrderWrapper>
								<Stones value={value} />
								<TopStones value={value} />
								<PluginWartel value={value} />
								<LeaderLink value={value} />
							</OrderWrapper>
							{/* history = browserhistory */}
							<OrderForm value={value} history={history} />
						</OrderContainer>
					</Layout>
				);
			}}
		</Consumer>
	);
}

const OrderContainer = styled.div`
	background-color: ${ThemeColors.white};
`;

const OrderInfo = styled.div`
	margin-top: 75px;
	background-color: ${ThemeColors.green};
	padding: 4rem 0;
	text-align: center;
`;

const OrderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
`;

const navLinks = [
	{ title: 'Stenen', id: 'stones' },
	{ title: 'Top Steentjes', id: 'topstones' },
	{ title: 'Plugin Wartels', id: 'pluginWartel' },
	{ title: 'Leader Link', id: 'leaderLink' },
	{ title: 'Bestelling', id: 'order' }
];
