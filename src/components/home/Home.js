import React from 'react';
import { Consumer } from '../../contextAPI/context';
import Layout from '../layout/Layout';
import Showcase from './Showcase';
import About from './About';
import Product from './Product';
import Who from './Who';
import Contact from './Contact';

export default function Home() {
	return (
		<Consumer>
			{value => {
				return (
					<Layout
						navBarFixed={false}
						navLinks={navLinks}
						value={value.orderlist}
					>
						<Showcase />
						<About />
						<Product />
						<Who />
						<Contact />
					</Layout>
				);
			}}
		</Consumer>
	);
}

const navLinks = [
	{ title: 'Wat we doen', id: 'about' },
	{ title: 'Product', id: 'product' },
	{ title: 'Wie we zijn', id: 'who' },
	{ title: 'Contact', id: 'contact' }
];
