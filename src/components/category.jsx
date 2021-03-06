/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import {
	GiNoodles,
	GiChopsticks,
	GiCoolSpices,
	GiMeat,
	GiSandwich,
	GiCakeSlice,
} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
	const data = [
		{
			path: '/cuisine/American',
			icon: <FaHamburger />,
			title: 'American',
		},
		{
			path: '/cuisine/Italian',
			icon: <FaPizzaSlice />,
			title: 'Italian',
		},
		{
			path: '/cuisine/Indian',
			icon: <GiCoolSpices />,
			title: 'Indian',
		},
		{
			path: '/cuisine/European',
			icon: <GiSandwich />,
			title: 'European',
		},
		{
			path: '/cuisine/African',
			icon: <GiMeat />,
			title: 'African',
		},
		{
			path: '/cuisine/Thai',
			icon: <GiChopsticks />,
			title: 'Thai',
		},
	];

	return (
		<>
			<List>
				{data.map((item, index) => {
					return (
						<div key={index}>
							<SLink to={item.path}>
								{item.icon}
								<h4>{item.title}</h4>
							</SLink>
						</div>
					);
				})}
			</List>
		</>
	);
};

const List = styled.div`
	display: flex;
	justify-content: center;
	margin: 1rem 0rem;
	gap: 2rem;
`;

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
border-radius: 15%;
gap: .3rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);
min-width: 6rem;

h4 {
    color: white;
    font-size: 0.8rem;
}
svg {
    color: white;
    font-size: 1.5rem;
}
&.active{
    background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
`;

export default Category;
