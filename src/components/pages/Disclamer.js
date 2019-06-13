import React from 'react';
import Layout from '../layout/Layout';
import styled from 'styled-components';
import { GlobalContainer, H2, P, ThemeColors } from '../../styles/elements';

export default function Disclamer() {
	return (
		<Layout navBarFixed={true} navLinks={navLinks}>
			<DisclaimerInfo>
				<GlobalContainer>
					<H2 color={ThemeColors.green}>Disclaimer</H2>
					<P>
						Wij doen onze best om alles op onze website zo juist en volledig
						mogelijk weer te geven, maar het kan wel eens zijn dat dit niet
						helemaal lukt. In dat geval is rockbottom<span>fischingStones</span>
						.com niet aansprakelijk voor de gevolgen van activiteiten die
						ondernomen worden op basis van deze website.
					</P>
				</GlobalContainer>
			</DisclaimerInfo>
		</Layout>
	);
}

const navLinks = [
	{ title: 'Wat we doen', id: 'about' },
	{ title: 'Product', id: 'product' },
	{ title: 'Wie we zijn', id: 'who' },
	{ title: 'Contact', id: 'contact' }
];

const DisclaimerInfo = styled.div`
	margin-top: 75px;

	span {
		color: ${ThemeColors.green};
	}
`;
