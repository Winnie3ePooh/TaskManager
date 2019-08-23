import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import {RowContainer} from '~/components/Containers/RowContainer';

class NavBar extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
      <NavBarContainer>
        TEST
      </NavBarContainer>
    );
  }
}

export default NavBar;

const NavBarContainer = styled(RowContainer)`
  width: 100%;
  height: 75px;
  margin-top: 0;
  background: #EAE7DC;
`
