import React, { Component } from 'react';
import jsonMakeHTML from 'json-make-html-email';
// const { userID, templateID, serviceID } = require('../config/keys');
import * as emailjs from 'emailjs-com';
import styled from 'styled-components';
import { Modal } from '../modal/Modal';

import {
  H1,
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
    response: {}
  };

  handleCloseModale = () => {
    this.timeout = window.setTimeout(() => {
      this.handleOpenModal();
      if (this.state.response.status === 200) {
        this.handleResetOrderlist();
      }
    }, 3000);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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

  handleDeleteOrder = id => {
    this.props.handleDeleteOrder(id);
  };

  handleAddQuantity = id => {
    this.props.handleAddQuantity(id);
  };

  handleSubtractQuantity = id => {
    this.props.handleSubtractQuantity(id);
  };

  handleTotalOrderPrice = orderlist => {
    this.props.handleTotalOrderPrice(orderlist);
  };

  handleResetOrderlist = () => {
    this.props.handleResetOrderlist();
    this.setState({
      name: '',
      email: '',
      mobile: '',
      streetname: '',
      streetnumber: '',
      zipcode: '',
      city: ''
    });
  };

  getTwoDigits = number => {
    return (number < 10 ? '0' : '') + number;
  };

  generateOrdernumber = () => {
    const time = new Date();
    const year = time.getFullYear();
    const month = this.getTwoDigits(time.getMonth() + 1);
    const day = this.getTwoDigits(time.getDate());
    const hour = this.getTwoDigits(time.getHours());
    const min = this.getTwoDigits(time.getMinutes());
    const sec = this.getTwoDigits(time.getSeconds());
    const orderNumber = `${year}${month}${day}/${hour}${min}${sec}`;
    return orderNumber;
  };

  jsonToHTML = json => {
    // const html = jsonMakeHTML.make(json,args, function(html){});

    const totalPrice = json
      .reduce((price, item) => price + item.totalItemPrice, 0)
      .toFixed(2);

    const sendToAddress = {
      Naam: this.state.name,
      Email: this.state.email,
      Mobiel: this.state.mobile,
      Straatnaam: this.state.streetname,
      Huisnummer: this.state.streetnumber,
      Postcode: this.state.zipcode,
      Woonplaats: this.state.city
    };

    const orderNumber = { Ordernummer: this.generateOrdernumber() };

    const totalOrderPrice = { Totale_Order_prijs: totalPrice };
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

    const template_params = {
      reply_to: this.state.email,
      from_name: this.state.name,
      from_email: this.state.email,
      to_name: 'rockbottomfishingstones.com',
      message_html: this.jsonToHTML(this.props.orderlist)
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
      <OrderContainer id='order'>
        <GlobalContainer>
          <H1 centerText={true} color={ThemeColors.white}>
            Bestelling
          </H1>
          <OrderGroup>
            <Modal
              isModalOpen={this.state.isModalOpen}
              response={this.state.response}
            />
            <FormGroup onSubmit={this.handleSubmit} autocomplete='off'>
              {Object.keys(this.props.orderlist).length !== 0 ? (
                <OrderList
                  orders={this.props.orderlist}
                  deleteOrder={this.handleDeleteOrder}
                  addQuantity={this.handleAddQuantity}
                  subtractQuantity={this.handleSubtractQuantity}
                />
              ) : (
                <p>Uw orderlijst is leeg</p>
              )}
              <TextInputField
                label='Naam'
                type='text'
                name='name'
                placeholder='* Uw naam'
                isRequired={true}
                value={this.state.name}
                onChange={this.handleChange}
              />
              <TextInputField
                label='Email'
                type='email'
                name='email'
                placeholder='* Uw email'
                isRequired={true}
                value={this.state.email}
                onChange={this.handleChange}
              />
              <TextInputField
                label='Telefoon'
                type='tel'
                name='mobile'
                placeholder='* Uw telefoon nummer'
                isRequired={true}
                value={this.state.mobile}
                onChange={this.handleChange}
              />
              <Direction direction='row' alignItems='flex-end'>
                <TextInputField
                  label='Verzend adres'
                  type='text'
                  name='streetname'
                  placeholder='* Uw straatnaam'
                  isRequired={true}
                  value={this.state.streetname}
                  onChange={this.handleChange}
                  width='75%'
                />
                <Gab width='1rem' />
                <TextInputField
                  type='text'
                  name='streetnumber'
                  placeholder='* Uw straatnummer'
                  isRequired={true}
                  value={this.state.streetnumber}
                  onChange={this.handleChange}
                />
              </Direction>
              <Direction direction='row' alignItems='flex-end'>
                <TextInputField
                  type='text'
                  name='zipcode'
                  placeholder='* Uw postcode'
                  isRequired={true}
                  value={this.state.zipcode}
                  onChange={this.handleChange}
                  width='50%'
                />
                <Gab width='1rem' />
                <TextInputField
                  type='text'
                  name='city'
                  placeholder='* Uw woonplaats'
                  isRequired={true}
                  value={this.state.city}
                  onChange={this.handleChange}
                  width='50%'
                />
              </Direction>
              <Gab height='1rem' />
              {Object.keys(this.props.orderlist).length !== 0 ? (
                <SubmitButton
                  type='submit'
                  disabled={!Object.keys(this.props.orderlist).length > 0}>
                  Verstuur
                </SubmitButton>
              ) : null}
              <P color='#333'>* Verplichte velden</P>
            </FormGroup>
          </OrderGroup>
        </GlobalContainer>
      </OrderContainer>
    );
  }
}

const OrderContainer = styled.div`
  background-color: ${ThemeColors.green};
  padding: 5rem 0;

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

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  label {
    color: ${ThemeColors.green};
    font-size: 1.1rem;
  }

  input,
  textarea {
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    outline: none;
  }
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
