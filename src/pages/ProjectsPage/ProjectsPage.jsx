import React from 'react';
import styled from 'styled-components';

import Loading from '~/components/Loading/Loading';
import ProjectsRow from '~/components/ProjectsRow/ProjectsRow';

import {MainContainer} from '~/components/Containers/MainContainer';

class ProjectsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    }
  }

  componentDidMount() {
    this.setState({
      projects: [
        {
          id: 0,
          title: 'My first project',
          tasks: [],
          owner: 'me',
          idCompleted: false,
        },
        {
          id: 1,
          title: 'My first project',
          tasks: [],
          owner: 'me',
          idCompleted: false,
        },
        {
          id: 2,
          title: 'My first project',
          tasks: [],
          owner: 'me',
          idCompleted: false,
        },
        {
          id: 3,
          title: 'My first project',
          tasks: [],
          owner: 'me',
          idCompleted: false,
        },
      ]
    });
  }

  render() {
    const projects = this.state.projects;
    return (
      <ProjectsPageContainer>
        <ProjectsRow projects={projects}></ProjectsRow>
      </ProjectsPageContainer>
    );
  }
}

export default ProjectsPage;

const ProjectsPageContainer = styled(MainContainer)`
  background: #8E8D8A;
  width: 90%;
  margin: 0 auto;
`
