import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jsonMakeHTML from 'json-make-html-email';
// const { userID, templateID, serviceID } = require('../config/keys');
import * as emailjs from 'emailjs-com';
import styled from 'styled-components';
import Modal from '../modal/Modal';

import {
	H1,
	H3,
	P,
	GlobalContainer,
	ThemeColors,
	ShadowColor,
	Direction,
	Gab
} from '../../styles/elements';
import { maxWidth } from '../../styles/utils';
import TextInputField from '../global/TextInputField';
import OrderList from './OrderList';
import { Consumer } from '../../contextAPI/context';
import { RESET_ORDERLIST } from '../../contextAPI/types';

export default class OrderForm extends Component {
	state = {
		name: '',
		email: '',
		mobile: '',
		streetname: '',
		streetnumber: '',
		zipcode: '',
		city: '',
		isModalOpen: false,
		response: {},
		terms: false
	};

	handleCloseModale = dispatch => {
		this.timeout = window.setTimeout(() => {
			this.handleOpenModal();
			if (this.state.response.status === 200) {
				this.handleResetOrderlist(dispatch);
				this.props.history.push('/');
			}
		}, 10000);
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleCheckbox = e => {
		this.setState({
			terms: e.target.checked
		});
	};

	stopTimeout = () => {
		window.clearTimeout(this.timeout);
	};

	handleOpenModal = () => {
		this.setState(prevState => ({
			isModalOpen: !prevState.isModalOpen
		}));
	};

	handleTotalOrderPrice = orderlist => {
		this.props.handleTotalOrderPrice(orderlist);
	};

	handleResetOrderlist = dispatch => {
		dispatch({ type: RESET_ORDERLIST, payload: [] });

		this.setState({
			name: '',
			email: '',
			mobile: '',
			streetname: '',
			streetnumber: '',
			zipcode: '',
			city: '',
			isModalOpen: false,
			response: {},
			terms: false
		});
	};

	getTwoDigits = number => {
		return (number < 10 ? '0' : '') + number;
	};

	getTotalOrderPrice = json => {
		return json
			.reduce((price, item) => price + item.totalItemPrice, 0)
			.toFixed(2);
	};

	getOrderlistInfo = order => {
		let filteredOrder = [];
		order.map(item => {
			const newOrder = {
				Product: item.title,
				Aantal: item.quantity,
				Product_totaal_prijs: `€${item.totalItemPrice.toFixed(2)}`
			};
			return (filteredOrder = [...filteredOrder, newOrder]);
		});
		return filteredOrder;
	};

	generateOrdernumber = () => {
		const time = new Date();
		const year = time.getFullYear();
		const month = this.getTwoDigits(time.getMonth() + 1);
		const day = this.getTwoDigits(time.getDate());
		const hour = this.getTwoDigits(time.getHours());
		const min = this.getTwoDigits(time.getMinutes());
		const sec = this.getTwoDigits(time.getSeconds());
		const orderNumber = `${year}${month}${day}-${hour}${min}${sec}`;

		return orderNumber;
	};

	convertJsonToHTML = json => {
		// const html = jsonMakeHTML.make(json, args, function(html){});

		const sendToAddress = {
			Naam: this.state.name,
			Straat: `${this.state.streetname} ${this.state.streetnumber}`,
			Postcode: this.state.zipcode,
			Woonplaats: this.state.city,
			Mobiel: this.state.mobile,
			Email: this.state.email
		};

		const orderNumber = { Ordernummer: this.generateOrdernumber() };

		const totalOrderPrice = {
			Prijs_bestelling: `€ ${this.getTotalOrderPrice(
				this.props.value.orderlist
			)}`,
			Verzendkosten_tot_10kg: `€ ${this.props.value.shippingCost}`,
			Totale_order_prijs: `€ ${parseFloat(
				this.getTotalOrderPrice(this.props.value.orderlist)
			) + this.props.value.shippingCost}`
		};
		const emailData = [orderNumber, ...json, totalOrderPrice, sendToAddress];

		const args = {
			separator: ': ',
			iterator: 1,
			wrapper: {
				before: '',
				class: 'jsonhtml',
				elem: 'ul',
				after: ''
			},
			child: {
				before: '',
				class: 'jsonhtml__singlechild',
				elem: 'li',
				titleClass: 'jsonhtml__parent',
				titleElem: 'h3',
				after: ''
			},
			css: {
				title: 'margin: 9px 0 0;color:#BA584C;',
				wrapperElem: '',
				childElem: 'list-style-type:none;',
				childElemNested: 'margin-left: 18px;'
			}
		};

		const html = jsonMakeHTML.make(emailData, args);
		return html;
	};

	handleSubmit = e => {
		e.preventDefault();

		const orderlist = this.getOrderlistInfo(this.props.value.orderlist);
		const htmlMessage = this.convertJsonToHTML(orderlist);

		const template_params = {
			reply_to: this.state.email,
			from_name: this.state.name,
			from_email: this.state.email,
			from_orderNumber: this.generateOrdernumber(),
			to_name: 'rockbottomfishingstones.com',
			message_html: htmlMessage,
			checked_terms: this.state.terms,
			total_order_price: `€ ${parseFloat(
				this.getTotalOrderPrice(this.props.value.orderlist)
			) + this.props.value.shippingCost}`
		};

		emailjs
			.send(
				'smtp_server',
				'template_umZERoZB',
				template_params,
				'user_2jMVPgjTFngQjfRiLqUOi'
			)
			// .send(serviceID, templateID, template_params, userID)
			.then(
				response => {
					console.log('SUCCESS!', response.status, response.text, response);
					this.setState({ response });
					this.handleOpenModal();
					this.handleCloseModale(this.props.value.dispatch);
				},
				err => {
					console.log('FAILED...', err);
					this.setState({ response: err });
					this.handleOpenModal();
					this.handleCloseModale(this.props.value.dispatch);
				}
			)
			.then(this.stopTimeout());
	};

	render() {
		return (
			<Consumer>
				{value => {
					return (
						<OrderContainer id='order'>
							<GlobalContainer>
								<H1 centerText={true} color={ThemeColors.white}>
									Bestelling
								</H1>
								<OrderGroup>
									<Modal
										isModalOpen={this.state.isModalOpen}
										response={this.state.response}
										message='Bestelling verzonden'
										info='We sturen u bevestigings email over de betalings gegevens.'
									/>
									<FormGroup onSubmit={this.handleSubmit} autocomplete='off'>
										{Object.keys(value.orderlist).length !== 0 ? (
											<OrderList />
										) : (
											<H3 centerText>
												Uw bestellijst is leeg, selecteer een product.
											</H3>
										)}
										<TextInputField
											label='Naam'
											type='text'
											name='name'
											placeholder='* Naam'
											isRequired={true}
											value={this.state.name}
											onChange={this.handleChange}
										/>
										<TextInputField
											label='Email'
											type='email'
											name='email'
											placeholder='* Email'
											isRequired={true}
											value={this.state.email}
											onChange={this.handleChange}
										/>
										<TextInputField
											label='Telefoon'
											type='tel'
											name='mobile'
											placeholder='* Telefoon nummer'
											isRequired={true}
											value={this.state.mobile}
											onChange={this.handleChange}
										/>
										<Direction direction='row' alignItems='flex-end'>
											<TextInputField
												label='Verzend adres'
												type='text'
												name='streetname'
												placeholder='* Straatnaam'
												isRequired={true}
												value={this.state.streetname}
												onChange={this.handleChange}
												width='75%'
											/>
											<Gab width='1rem' />
											<TextInputField
												type='text'
												name='streetnumber'
												placeholder='* Huisnummer'
												isRequired={true}
												value={this.state.streetnumber}
												onChange={this.handleChange}
												width='25%'
											/>
										</Direction>
										<Direction direction='row' alignItems='flex-end'>
											<TextInputField
												type='text'
												name='zipcode'
												placeholder='* Postcode'
												isRequired={true}
												value={this.state.zipcode}
												onChange={this.handleChange}
												width='50%'
											/>
											<Gab width='1rem' />
											<TextInputField
												type='text'
												name='city'
												placeholder='* Woonplaats'
												isRequired={true}
												value={this.state.city}
												onChange={this.handleChange}
												width='50%'
											/>
										</Direction>
										<CheckTerms>
											<Direction direction='row' alignItems='center'>
												<TextInputField
													type='checkbox'
													value='terms'
													name='terms'
													isRequired={true}
													onChange={this.handleCheckbox}
													checked={this.state.terms}
												/>
												<p>
													* U gaat akkoord met de
													<span>
														<Link to='/terms'> algemene voorwaarden.</Link>
													</span>
												</p>
											</Direction>
										</CheckTerms>
										{Object.keys(value.orderlist).length !== 0 ? (
											<SubmitButton
												type='submit'
												disabled={!Object.keys(value.orderlist).length > 0}
											>
												Verstuur
											</SubmitButton>
										) : null}
										<P color='#333'>* Verplichte velden</P>
									</FormGroup>
								</OrderGroup>
							</GlobalContainer>
						</OrderContainer>
					);
				}}
			</Consumer>
		);
	}
}

const OrderContainer = styled.div`
	background-color: ${ThemeColors.green};
	padding: 5.5rem 0;

	${maxWidth.small`
    padding: 3rem 0;
  `}
`;

const OrderGroup = styled.div`
	width: 90%;
	margin: 2rem auto 0 auto;
	box-shadow: ${ShadowColor};
`;

const FormGroup = styled.form`
	width: 100%;
	border: 1px ${ThemeColors.green} solid;
	border-radius: 5px;
	padding: 0 1rem;
	background-color: ${ThemeColors.white};
`;

const SubmitButton = styled.button`
	background-color: ${ThemeColors.black};
	color: ${ThemeColors.white};
	border-radius: 5px;
	padding: 0.75rem;
	border: none;
	font-size: 1rem;
	text-align: center;
	outline: none;
	width: 100%;

	:hover {
		background-color: ${ThemeColors.green};
	}
`;

const CheckTerms = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 1rem 0;

	p {
		color: ${ThemeColors.black};
		margin-left: 0.5rem;
	}

	a {
		color: ${ThemeColors.green};
		:hover {
			color: ${ThemeColors.black};
		}
	}
`;
