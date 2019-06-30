import React, { Component } from 'react';
import Layout from '../layout/Layout';
import styled from 'styled-components';
import {
	GlobalContainer,
	H2,
	H3,
	Gab,
	ThemeColors,
	PrimaryButton
} from '../../styles/elements';
import termsData from './termsData';

export default class TermsConditions extends Component {
	state = {
		isCollapse: false
	};

	collapseTableRow = (id, data) => {
		this.setState(prevState => ({
			isCollapse: !prevState.isCollapse
		}));

		data.map(item => {
			if (item.id === id) {
				if (item.collapse === true) {
					item.collapse = false;
				} else {
					item.collapse = true;
				}
			} else {
				item.collapse = false;
			}
		});
	};

	render() {
		return (
			<Layout navBarFixed={true} navLinks={navLinks}>
				<GlobalContainer>
					<TermsContainer>
						<H2 color={ThemeColors.green}>Algemene voorwaarden</H2>
						<PrimaryButton
							color={ThemeColors.white}
							onClick={() => this.props.history.go(-1)}
						>
							Ga terug
						</PrimaryButton>
						<Gab height='0.5rem' />
						<H3 color={ThemeColors.black}>Inhoudsopgave</H3>
						<TableContainer>
							{termsData.map(data => (
								<div key={data.id}>
									<TableHeader
										isCollapse={data.collapse}
										onClick={() => this.collapseTableRow(data.id, termsData)}
									>
										<h4>{data.header}</h4>
									</TableHeader>
									<TableContent isCollapse={data.collapse}>
										{data.content}
									</TableContent>
								</div>
							))}
						</TableContainer>
					</TermsContainer>
				</GlobalContainer>
			</Layout>
		);
	}
}

const navLinks = [
	{ title: 'Wat we doen', id: 'about' },
	{ title: 'Product', id: 'product' },
	{ title: 'Wie we zijn', id: 'who' },
	{ title: 'Contact', id: 'contact' }
];

const TermsContainer = styled.div`
	margin: 5rem 0;
`;

const TableContainer = styled.div`
	margin: 0 auto;
	/* max-width: 700px; */
`;

const TableHeader = styled.div`
	background-color: ${({ isCollapse }) =>
		isCollapse ? ThemeColors.green : ThemeColors.black};
	color: ${ThemeColors.white};
	border-radius: 5px;
	padding: 0.5rem 1rem;
	margin: 0.25rem 0;

	:hover {
		background-color: ${ThemeColors.green};
	}
`;

const TableContent = styled.div`
	display: ${({ isCollapse }) => (isCollapse ? 'block' : 'none')};
	border: 2px solid ${ThemeColors.green};
	border-radius: 5px;

	ol {
		/* list-style-position: inside; */
		margin: 0 2rem;
	}

	p {
		margin: 0;
	}
`;
