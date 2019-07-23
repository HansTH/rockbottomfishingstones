import React, { Fragment } from 'react';
import {
	PrimaryButton,
	DarkButton,
	Notification,
	ThemeColors
} from '../../styles/elements';
import { ADD_TO_ORDERLIST } from '../../contextAPI/types';

export default function OrderButton({ value, product }) {
	const addToOrderlist = (order, dispatch) => {
		dispatch({ type: ADD_TO_ORDERLIST, payload: order });
	};

	const getQuantity = (product, orderlist) => {
		let quantity = 0;
		orderlist.map(order => {
			if (order.id === product.id) {
				quantity = order.quantity;
			}
		});
		return quantity;
	};

	return (
		<Fragment>
			{getQuantity(product, value.orderlist) > 0 ? (
				<PrimaryButton
					centerText={true}
					bold={true}
					block='true'
					// onClick={() => this.addToOrderlist(product, value.dispatch)}
					href='#order'
				>
					Toegevoegd aan de bestelling
					<Notification>{getQuantity(product, value.orderlist)}</Notification>
				</PrimaryButton>
			) : (
				<DarkButton
					centerText={true}
					bold={true}
					block='true'
					color={ThemeColors.black}
					onClick={() => addToOrderlist(product, value.dispatch)}
				>
					Bestellen €{product.price.toFixed(2)}
				</DarkButton>
			)}
		</Fragment>
	);
}
