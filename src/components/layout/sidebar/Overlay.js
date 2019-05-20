import React from 'react';
import styled from 'styled-components';
import { minWidth } from '../../../styles/utils';

export default function Overlay(props) {
	const { sidebarClose, show } = props;
	return <OverlayContainer show={show} onClick={sidebarClose} />;
}

const OverlayContainer = styled.div`
	position: fixed;
	top: 60px;
	left: 0;
	width: 0;
	height: 100%;
	z-index: 0;
	transition: 0.3s ease-out;

	${({ show }) =>
		show &&
		`z-index: 200;
    width: 100%;
    backdrop-filter: blur(0px);
    background-color: rgba(51, 51, 51, 0.7);`}

	@media (min-width: 569px) {
		.overlay {
			display: none;
		}

		${minWidth.medium`
    .overlay {
      display: none;
    }
  `}
	}
`;
