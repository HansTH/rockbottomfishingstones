import React from 'react';
import Scroll from './global/Scroll';
import styled from 'styled-components';
import circleArrowDown from '../assets/circleArrow-down.png';
import { H1, ThemeColors } from '../styles/elements';
import { maxWidth } from '../styles/utils';
import showcaseBGImage from '../assets/showcase_BG-image.jpg';

const Showcase = () => {
	return (
		<ShowcaseContainer id='showcase'>
			<Overlay />
			<ShowcaseContent>
				<ShowcaseTitle>De nieuwe Steentijd...</ShowcaseTitle>
				<Scroll type='id' element='about'>
					<ShowcaseButton image={circleArrowDown} href='#about' />
				</Scroll>
			</ShowcaseContent>
		</ShowcaseContainer>
	);
};
export default Showcase;

const ShowcaseContainer = styled.div`
	position: relative;
	top: 0;
	background-image: url(${showcaseBGImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	background: rgba(51, 51, 51, 0.2);
	width: 100vw;
	height: 100vh;
`;

const ShowcaseContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 100%;
`;

const ShowcaseTitle = styled(H1)`
	font-size: 3rem;
	margin: auto 0;
	color: ${ThemeColors.white};
`;

const ShowcaseButton = styled.a`
	margin-top: 8rem;
	margin-bottom: 4rem;
	background: url(${({ image }) => image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 80px;
	height: 80px;
	border: none;
	border-radius: 50%;
	outline: none;
	cursor: pointer;
	:hover {
		background-color: rgba(51, 51, 51, 0.5);
	}

	${maxWidth.small`
    width: 60px;
    height: 60px;
  `}
`;
