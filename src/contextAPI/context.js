import reducer from './reducer';
import React, { Component } from 'react';
const Context = React.createContext();

export const Consumer = Context.Consumer;

export class Provider extends Component {
	state = {
		orderlist: [],

		shippingCost: 6.95,

		dispatch: action => this.setState(state => reducer(state, action)),

		products: {
			pluginWartel: [
				{
					id: 'RBFSpluginwartel',
					image:
						'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766527/rbfs/RBFS-PlugInWartel.jpg',
					title: 'Plugin Wartels maat 8',
					price: 2.5,
					itemQuantity: 10,
					info:
						'Maat 8 wartels die perfect passen in de plug-in. Voor gebruik op de onderlijn of aan een leader verlenging. Worden geleverd per 10 stuks.'
				}
			],
			leaderLink: [
				{
					id: 'RBFSleaderlink',
					image:
						'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766527/rbfs/RBFS-LeaderLink.jpg',
					title: 'Leader Link',
					price: 3.0,
					itemQuantity: 3,
					info:
						'Rockbottom stenen zijn op verschillende manieren te bevestigen. Een daarvan is door het verlengen van de leader. Niet iedereen is handig in het splicen van leadermateriaal. Daarom hebben wij het al gedaan. Worden geleverd per 3 stuks.'
				}
			],
			topStones: [
				{
					id: 'RBFStopstone20',
					image:
						'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766528/rbfs/RBFS-Topstones-small.jpg',
					title: 'Top steentjes, klein 20 - 30 gram',
					price: 3.0,
					itemQuantity: 3,
					info:
						'Deze backstones zijn ideaal voor het afzinken van de lijn. Voorzien met eenvoudige clip en zo snel te bevestigen. Worden geleverd per 3 stuks.'
				},
				{
					id: 'RBFStopstone40',
					image:
						'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766528/rbfs/RBFS-Topstones-large.jpg',
					title: 'Top steentjes, groot 31 - 40 gram',
					price: 3.0,
					itemQuantity: 3,
					info:
						'Deze backstones zijn ideaal voor het afzinken van de lijn. Voorzien met eenvoudige clip en zo snel te bevestigen. Worden geleverd per 3 stuks.'
				}
			],
			stones: [
				{
					id: 'RBFSstone-3',
					image:
						'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766527/rbfs/RBFS-Stones60.jpg',
					title: 'Stenen, maat 3: 61 - 90 gram',
					price: 1.4,
					itemQuantity: 1,
					info:
						'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
					category: 'RBFS steen'
				},
				{
					id: 'RBFSstone-4',
					image:
						'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766529/rbfs/RBFS-Stones90.jpg',
					title: 'Stenen, maat 4: 91 - 120 gram',
					price: 1.4,
					itemQuantity: 1,
					info:
						'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
					category: 'RBFS steen'
				},
				{
					id: 'RBFSstone-5',
					image:
						'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766527/rbfs/RBFS-Stones120.jpg',
					title: 'Stenen, maat 5: 121 - 150 gram',
					price: 1.4,
					itemQuantity: 1,
					info:
						'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
					category: 'RBFS steen'
				},
				{
					id: 'RBFSstone-6',
					image:
						'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766528/rbfs/RBFS-Stones150.jpg',
					title: 'Stenen, maat 6: 151 - 180 gram',
					price: 1.4,
					itemQuantity: 1,
					info:
						'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
					category: 'RBFS steen'
				},
				{
					id: 'RBFSstone-7',
					image:
						'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766527/rbfs/RBFS-Stones180.jpg',
					title: 'Stenen, maat 7: 181 - 210 gram',
					price: 1.4,
					itemQuantity: 1,
					info:
						'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
					category: 'RBFS steen'
				},
				{
					id: 'RBFSstone-8',
					image:
						'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766528/rbfs/RBFS-Stones210.jpg',
					title: 'Stenen, maat 8: 211 - 240 gram',
					price: 1.4,
					itemQuantity: 1,
					info:
						'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
					category: 'RBFS steen'
				},
				{
					id: 'RBFSstone-9',
					image:
						'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766528/rbfs/RBFS-Stones240.jpg',
					title: 'Stenen, maat 9: 241 - 270 gram',
					price: 1.4,
					itemQuantity: 1,
					info:
						'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
					category: 'RBFS steen'
				},
				{
					id: 'RBFSstone-10',
					image:
						'https://res.cloudinary.com/dtwdioxca/image/upload/v1558766528/rbfs/RBFS-Stones270.jpg',
					title: 'Stenen, maat 10: 271 - 300 gram',
					price: 1.4,
					itemQuantity: 1,
					info:
						'Voorzien van een grootoogwartel en een plug-in voor een goede inhaking. Afwijkende gewichten en bevestiging is mogelijk, neem daarvoor contact met ons op.',
					category: 'RBFS steen'
				}
			]
		}
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}
