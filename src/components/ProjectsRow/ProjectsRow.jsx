import React from 'react';
import styled from 'styled-components';

import {RowContainer} from '~/components/Containers/RowContainer';
import ProjectCard from '~/components/ProjectCard/ProjectCard';

function ProjectCards ({ projects }) {
  return projects.map((item) =>
      <ProjectCard key={item.id} project={item} />
  );
}

class ProjectsRow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const projects = this.props.projects;
    const isLoaded = projects.length > 0;
    return (
      <ProjectsRowContainer>
        {
          isLoaded
          ? <ProjectCards projects={projects} />
          : <h1>NONONO</h1>
        }
        
      </ProjectsRowContainer>
    );
  }
}

export default ProjectsRow;

const ProjectsRowContainer = styled(RowContainer)`
  width: 95%;
  min-height: 350px;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #D8C3A5;
  box-sizing: border-box;
  border-radius: 15px;
  margin: 15px auto 0px auto;
  padding: 15px;
`
