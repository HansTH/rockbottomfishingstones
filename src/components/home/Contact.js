import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// const { userID, templateID, serviceID } = require('../../config/keys');
import * as emailjs from 'emailjs-com';
import styled from 'styled-components';
import Modal from '../modal/Modal';
import TextInputField from '../global/TextInputField';
import TextAreaField from '../global/TextAreaField';

import {
	H1,
	P,
	GlobalContainer,
	ThemeColors,
	ShadowColor
} from '../../styles/elements';
import { maxWidth } from '../../styles/utils';

export default class Contact extends Component {
	state = {
		name: '',
		email: '',
		subject: '',
		message: '',
		isModalOpen: false,
		response: {}
	};

	handleCloseModale = () => {
		this.timeout = window.setTimeout(() => {
			this.handleOpenModal();
			if (this.state.response.status === 200) {
				this.setState({
					name: '',
					email: '',
					subject: '',
					message: ''
				});
			}
		}, 3000);
	};
	stopTimeout = () => {
		window.clearTimeout(this.timeout);
	};

	handleOpenModal = () => {
		this.setState(prevState => ({
			isModalOpen: !prevState.isModalOpen
		}));
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		const template_params = {
			reply_to: this.state.email,
			from_name: this.state.name,
			from_email: this.state.email,
			from_subject: this.state.subject,
			to_name: 'rockbottomfishingstones.com',
			message_html: this.state.message
		};

		emailjs
			.send(
				'smtp_server',
				'template_jSlPcQOT',
				template_params,
				'user_QinhjRBNylb1qiAlgG7LW'
			)
			// .send(serviceID, templateID, template_params, userID)
			.then(
				response => {
					console.log('SUCCESS!', response.status, response.text, response);
					this.setState({ response });
					this.handleOpenModal();
					this.handleCloseModale();
				},
				err => {
					console.log('FAILED...', err);
					this.setState({ response: err });
					this.handleOpenModal();
					this.handleCloseModale();
				}
			)
			.then(this.stopTimeout());
	};

	render() {
		return (
			<ContactContainer id='contact'>
				<GlobalContainer>
					<H1 centerText={true} color={ThemeColors.white}>
						Contact
					</H1>
					<ContactForm>
						<Modal
							isModalOpen={this.state.isModalOpen}
							response={this.state.response}
							message='Uw bericht is verzonden'
						/>
						<FormGroup onSubmit={this.handleSubmit} autocomplete='off'>
							<TextInputField
								label='Naam'
								type='text'
								name='name'
								placeholder='* Naam'
								onChange={this.handleChange}
								value={this.state.name}
								isRequired={true}
							/>
							<TextInputField
								label='Email'
								type='email'
								name='email'
								placeholder='* Email'
								onChange={this.handleChange}
								value={this.state.email}
								isRequired={true}
							/>
							<TextInputField
								label='Onderwerp'
								type='text'
								name='subject'
								placeholder='* Onderwerp'
								onChange={this.handleChange}
								value={this.state.subject}
								isRequired={true}
							/>
							<TextAreaField
								label='Bericht'
								name='message'
								cols='30'
								rows='10'
								placeholder='* Bericht'
								onChange={this.handleChange}
								value={this.state.message}
								isRequired={true}
							/>
							<SubmitButton type='submit'>Verstuur</SubmitButton>
							<P color='#333'>* Verplichte velden</P>
						</FormGroup>
					</ContactForm>
				</GlobalContainer>
			</ContactContainer>
		);
	}
}

const ContactContainer = styled.div`
	background-color: ${ThemeColors.green};
	padding: 5rem;

	${maxWidth.small`
    padding: 3rem 0;
  `}
`;

const ContactForm = styled.div`
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
