import React from 'react';
import styled from 'styled-components';
import { ThemeColors } from '../../styles/elements';
import { maxWidth } from '../../styles/utils';
import minusButton from '../../assets/minus-button.png';
import plusButton from '../../assets/plus-button.png';
import trashButton from '../../assets/trash-button.png';
import { Consumer } from '../../contextAPI/context';
import {
	DELETE_ORDER_ITEM,
	ADD_QUANTITY,
	SUBTRACT_QUANTITY
} from '../../contextAPI/types';

export default function OrderList() {
	const totalOrderPrice = orderslist => {
		const total = orderslist.reduce(
			(price, item) => price + item.totalItemPrice,
			0
		);
		return parseFloat(total + 6.95).toFixed(2);
	};

	const deleteOrder = (id, dispatch) => {
		dispatch({ type: DELETE_ORDER_ITEM, payload: id });
	};

	const addQuantity = (order, dispatch) => {
		dispatch({ type: ADD_QUANTITY, payload: order });
	};

	const subtractQuantity = (order, dispatch) => {
		dispatch({ type: SUBTRACT_QUANTITY, payload: order });
	};

	return (
		<Consumer>
			{value => {
				return (
					<table style={{ borderCollapse: 'collapse' }}>
						<OrderlistHead>
							<tr>
								<td className='orderlist-image' />
								<td>
									<h3 style={{ textAlign: 'start' }}>Product</h3>
								</td>
								<td>
									<h3>Aantal</h3>
								</td>
								<td>
									<h3>Prijs</h3>
								</td>
								<td />
							</tr>
						</OrderlistHead>
						{value.orderlist.map(order => (
							<OrderlistBody key={order.id}>
								<tr key={order.id}>
									<td className='orderlist-image'>
										<OrderlistImage image={order.image} />
									</td>
									<td className='orderlist-info'>
										<h3>{order.title}</h3>
										<p>{order.info}</p>
									</td>

									<td style={{ textAlign: 'center' }}>
										<OrderlistButton
											type='button'
											image={minusButton}
											onClick={() => subtractQuantity(order, value.dispatch)}
										/>
										<h3 style={{ margin: 0 }}>{order.quantity}</h3>
										<OrderlistButton
											type='button'
											image={plusButton}
											onClick={() => addQuantity(order, value.dispatch)}
										/>
									</td>

									<td style={{ textAlign: 'center' }}>
										<h3>€{order.totalItemPrice.toFixed(2)}</h3>
									</td>

									<td style={{ textAlign: 'center' }}>
										<OrderlistButton
											type='button'
											image={trashButton}
											onClick={() => deleteOrder(order.id, value.dispatch)}
										/>
									</td>
								</tr>
							</OrderlistBody>
						))}
						<OrderlistBottomBody>
							<tr>
								<td />
								<td />
								<td style={{ textAlign: 'center' }}>
									<div>
										<h4>Verzendkosten</h4>
									</div>
								</td>
								<td />
							</tr>
							<tr>
								<td />
								<td />
								<td style={{ textAlign: 'center' }}>
									<div>
										<h4>tot 10kg:</h4>
									</div>
								</td>
								<td style={{ textAlign: 'center' }}>
									<h3>€6.95</h3>
								</td>
							</tr>
							<tr>
								<td />
								<td />
								<td style={{ textAlign: 'center' }}>
									<h2>Total:</h2>
								</td>
								<td style={{ textAlign: 'center' }}>
									<h2>€{totalOrderPrice(value.orderlist)}</h2>
								</td>
							</tr>
						</OrderlistBottomBody>
					</table>
				);
			}}
		</Consumer>
	);
}

const OrderlistButton = styled.button`
	margin: 0.5rem;
	background: url(${({ image }) => image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 35px;
	height: 35px;
	border: none;
	border-radius: 50%;
	outline: none;
	cursor: pointer;
	:hover {
		background-color: white;
	}
`;

const OrderlistImage = styled.div`
	background: url(${({ image }) => image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100px;
	height: 100px;
	margin: 1rem 0 1rem 0.5rem;
	border: 2px solid ${ThemeColors.green};
	border-radius: 5px;
`;

const OrderlistHead = styled.tbody`
	border-bottom: 2px solid ${ThemeColors.green};

	h2 {
		color: ${ThemeColors.black};
		font-weight: 800;
		margin: 0.5rem 0;
	}

	h3 {
		color: ${ThemeColors.green};
		font-weight: 800;
		text-align: center;
		margin: 0.5rem 0;
	}

	.orderlist-image {
		width: 120px;
		${maxWidth.small`
    display: none;
       width: 0;
    `};
	}
`;

const OrderlistBody = styled.tbody`
	border-bottom: 2px solid ${ThemeColors.green};
	h3 {
		color: ${ThemeColors.black};
		font-weight: 800;
		margin: 0 0 0.5rem 0;
	}

	p {
		font-size: 0.75rem;
	}
	.orderlist-image {
		width: 120px;

		${maxWidth.small`
    display: none;
       width: 0;
    `};
	}

	.orderlist-info {
		width: 50%;
	}
`;

const OrderlistBottomBody = styled.tbody`
	h2 {
		color: ${ThemeColors.black};
		font-weight: 700;
		margin: 0.5rem 0;
	}
`;
