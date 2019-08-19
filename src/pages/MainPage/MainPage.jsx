import {hot} from 'react-hot-loader';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import routes from '../../routesroutes/routes';
import styled from 'styled-components';

import Loading from '~/components/Loading/Loading';

import {MainContainer} from '~/components/Containers/MainContainer';

const NotMainPage = () => {
  return <div>Bar</div>
}

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    const isLoading = this.state.loading;

    return (
      <React.Fragment>
        {
          isLoading
          ? <Loading />
          : <MainContainer>
              <div>Foo</div>
              <NotMainPage></NotMainPage>
            </MainContainer>
        }
      </React.Fragment>
    );
  }
}

export default hot(module)(MainPage);
