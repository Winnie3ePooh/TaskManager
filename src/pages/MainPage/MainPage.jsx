import React from 'react';
import {hot} from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import routes from '../../routesroutes/routes';
import styled from 'styled-components';

import ProjectsPage from '~/pages/ProjectsPage/ProjectsPage'

import Loading from '~/components/Loading/Loading';
import NavBar from '~/components/NavBar/NavBar';

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
              <NavBar></NavBar>
              <ProjectsPage></ProjectsPage>
            </MainContainer>
        }
      </React.Fragment>
    );
  }
}

export default hot(module)(MainPage);
