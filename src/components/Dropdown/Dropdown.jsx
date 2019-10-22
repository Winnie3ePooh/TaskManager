import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const menuItems = [
  { id: 1, label: 'Open', path: '/project/'},
  { id: 2, label: 'Edit', path: '/project/edit/'},
  { id: 3, label: 'Remove', path: '/project/remove/'},
];

const Dropdown = ({ isOpen, closeIt, pId }) => {
	return (
		<DropdownMenu
		className={isOpen ? 'active' : ''}
		itemCount={menuItems.length}
		onMouseOut={closeIt}
			onBlur={() => void 0}
			>
			{menuItems.map(item => (
				<MenuItem 
					key={item.id}
					to={item.path + pId}>
					{item.label}
				</MenuItem>
				))}
		</DropdownMenu>
	);
};

Dropdown.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeIt: PropTypes.func,
	pId: PropTypes.number,
};

export default Dropdown;

const DropdownMenu = styled.div`
	width: 150px;
	height: 0;
	display: none;
	background: #d8c3a5;
	border-radius: 5px;
	margin: 0;
	padding: 0;
	cursor: default;

	&.active {
		display: block;
		height: auto;
	}
`;

const MenuItem = styled(Link)`
	display: block;
	width: 100%;
	height: auto;
	border-radius: 5px;
	box-sizing: border-box;
	border: 1px solid transparent;
	padding: 5px;
	text-align: center;
	text-decoration: none;
	color: #eae7dc;

	&:hover {
		color: #e98074;
		border-color: #e98074;
		cursor: pointer;
	}
`;
