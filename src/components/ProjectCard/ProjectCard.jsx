import React from 'react';
import styled from 'styled-components';

import {RowContainer} from '~/components/Containers/RowContainer';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const project = this.props.project;
    return (
      <ProjectCardContainer>
        <HeaderContainer>
          {project.title}
        </HeaderContainer>
      </ProjectCardContainer>
    );
  }
}

export default ProjectCard;

const ProjectCardContainer = styled(RowContainer)`
  width: 32%;
  height: 250px;
  box-sizing: content-box;
  border-radius: 15px;
  background: #EAE7DC;
  margin: 0;
  margin-bottom: 15px;
`;

const HeaderContainer = styled.h2`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1% 5%;
  margin: 0;
  color: #E98074;

  &::after {
    content: ""; 
    margin: 0 auto; 
    width: 99%;
    border-bottom: 1px solid #E98074;
  }
`;