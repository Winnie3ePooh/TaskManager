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
  height: calc(100% - 75px);
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  flex-direction: column;
  margin: 0 auto;
`
