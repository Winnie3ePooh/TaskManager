import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '~/routes/routes';

import Loading from '~/components/Loading/Loading';
import NavBar from '~/components/NavBar/NavBar';

import { MainContainer } from '~/components/Containers/MainContainer';

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
              <Router>
                <NavBar></NavBar>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </Router>
            </MainContainer>
        }
      </React.Fragment>
    );
  }
}

export default hot(module)(MainPage);
