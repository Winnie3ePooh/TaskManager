import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Dropdown = ({ data, isOpen, closeIt }) => {
  return (
    <DropdownMenu
      className={isOpen ? 'active' : ''}
      itemCount={data.length}
      onMouseOut={closeIt}
    >
      {data.map(item => 
        <MenuItem key={item.id}>
          <a>{item.label}</a>
        </MenuItem>
      )}
    </DropdownMenu>
  );
};

export default Dropdown;

const DropdownMenu = styled.ul`
  width: 150px;
  height: 0;
  display: none;
  background: #d8c3a5;
  border-radius: 5px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  cursor: default;

  &.active {
    display: block;
    height: auto;
  }
`;

const MenuItem = styled.li`
  height: auto;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid transparent;
  padding: 5px;
  text-align: center;

  & > a {
    text-decoration: none;
  }

  &:hover {
    border-color: #e98074;
    cursor: pointer;

    & > a {
      color: #e98074;
    }
  }
`;
