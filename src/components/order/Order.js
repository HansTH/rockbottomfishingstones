import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import OrderForm from './OrderForm';
import { ThemeColors } from '../../styles/elements';
import { maxWidth } from '../../styles/utils';
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
  /* position: relative; */
  background-color: ${ThemeColors.white};
`;

const OrderWrapper = styled.div`
  margin-top: 80px;
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
  { title: 'Topsteentjes', id: 'topstones' },
  { title: 'Plugin Wartels', id: 'pluginWartel' },
  { title: 'Leader Link', id: 'leaderLink' },
  { title: 'Bestelling', id: 'order' }
];
