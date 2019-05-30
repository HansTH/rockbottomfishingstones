import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import OrderForm from './OrderForm';
import { P, ThemeColors, GlobalContainer } from '../../styles/elements';
import { maxWidth, absolute } from '../../styles/utils';
import Stones from './products/Stones';
import TopStones from './products/TopStones';
import PluginWartel from './products/PluginWartel';
import LeaderLink from './products/LeaderLink';

export default class Order extends Component {
  state = {
    orderlist: []
  };

  handleOrder = item => {
    this.setState({ orderlist: [...this.state.orderlist, item] }, () => {
      console.log('Order component', this.state.orderlist);
    });
  };

  addToOrderlist = order => {
    const alreadyInOrderlist = this.state.orderlist.findIndex(
      item => item.id === order.id
    );
    let updateOrder = {};
    if (alreadyInOrderlist === -1) {
      updateOrder = this.state.orderlist.concat({
        ...order,
        quantity: 1,
        totalItemPrice: order.price
      });
      this.setState({ orderlist: updateOrder }, () => {
        console.log(this.state.orderlist);
      });
    } else {
      updateOrder = [...this.state.orderlist];
      updateOrder[alreadyInOrderlist].quantity += 1;
      updateOrder[alreadyInOrderlist].totalItemPrice +=
        updateOrder[alreadyInOrderlist].price;
      this.setState({ orderlist: updateOrder }, () => {
        console.log('Order component', this.state.orderlist);
      });
    }
  };

  deleteOrder = id => {
    const filterOrderlist = this.state.orderlist.filter(
      order => order.id !== id
    );
    this.setState({ orderlist: filterOrderlist });
  };

  addQuantity = id => {
    const alreadyInOrderlist = this.state.orderlist.findIndex(
      item => item.id === id
    );
    let updateOrder = [...this.state.orderlist];
    updateOrder[alreadyInOrderlist].quantity += 1;
    updateOrder[alreadyInOrderlist].totalItemPrice +=
      updateOrder[alreadyInOrderlist].price;
    this.setState({ orderlist: updateOrder }, () => {
      console.log('Order component', this.state.orderlist);
    });
  };

  subtractQuantity = id => {
    const alreadyInOrderlist = this.state.orderlist.findIndex(
      item => item.id === id
    );
    let updateOrder = [...this.state.orderlist];
    if (updateOrder[alreadyInOrderlist].quantity > 1) {
      updateOrder[alreadyInOrderlist].quantity -= 1;
      updateOrder[alreadyInOrderlist].totalItemPrice -=
        updateOrder[alreadyInOrderlist].price;
      this.setState({ orderlist: updateOrder }, () => {
        console.log('Order component', this.state.orderlist);
      });
    } else {
      this.deleteOrder(id);
    }
  };

  resetOrderlist = () => {
    this.setState({
      orderlist: []
    });
  };

  render() {
    return (
      <Layout navBarFixed={true} navLinks={navLinks}>
        <OrderContainer>
          <OrderInfo>
            <GlobalContainer>
              <P>
                Rockbottom fishingstones is een nieuwe onderneming die meer
                idealistisch ingesteld is dan commercieel. We blijven verder
                ontwikkelen om zo duurzaam en milieuvriendelijk onze producten
                aan te bieden. We proberen daarbij onze prijzen zo laag mogelijk
                te houden.
              </P>
              <P>
                Bestellen kan eenvoudig door het bestelformulier in te vullen en
                het bedrag over te maken. Vervolgens gaan wij aan het werk en
                proberen dat u binnen een week onze producten aan de waterkant
                kunt gebruiken.
              </P>
              <P>
                Wij schuwen geen kritiek. Hebt u iets aan te merken of tips en
                ideeën ter verbetering, geef het ons door op
                info@rockbottomfishingstones.com.
              </P>
            </GlobalContainer>
          </OrderInfo>
          <OrderWrapper>
            <Stones item={this.addToOrderlist} />
            <TopStones item={this.addToOrderlist} />
            <PluginWartel item={this.addToOrderlist} />
            <LeaderLink item={this.addToOrderlist} />
          </OrderWrapper>
          <OrderForm
            orderlist={this.state.orderlist}
            handleDeleteOrder={this.deleteOrder}
            handleAddQuantity={this.addQuantity}
            handleSubtractQuantity={this.subtractQuantity}
            handleResetOrderlist={this.resetOrderlist}
          />
        </OrderContainer>
      </Layout>
    );
  }
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

  /* ${maxWidth.small`
		text-align: center;
  `} */
`;

const navLinks = [
  { title: 'Stenen', id: 'stones' },
  { title: 'Top Steentjes', id: 'topstones' },
  { title: 'Plugin Wartels', id: 'pluginWartel' },
  { title: 'Leader Link', id: 'leaderLink' },
  { title: 'Bestelling', id: 'order' }
];
