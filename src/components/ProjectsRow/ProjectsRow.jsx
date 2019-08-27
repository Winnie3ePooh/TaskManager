import React from 'react';
import styled, {keyframes} from 'styled-components';

import {RowContainer} from '~/components/Containers/RowContainer';
import ProjectCard from '~/components/ProjectCard/ProjectCard';

import logo from '~/assets/add.svg';

function ProjectCards ({ projects }) {
  return projects.map((item) =>
      <ProjectCard key={item.id} project={item} />
  );
}

class ProjectsRow extends React.Component {
  constructor(props) {
    super(props);
    this.addNewProject = this.addNewProject.bind(this);
  }

  componentDidMount() {
  }

  addNewProject(e) {
    console.log(e);
  }

  render() {
    const projects = this.props.projects;
    return (
      <ProjectsRowContainer>
          <ProjectCards projects={projects} />
          <NewProjectButton onClick={this.addNewProject}>
            <img src={logo} alt='asd'/>
          </NewProjectButton>
      </ProjectsRowContainer>
    );
  }
}

export default ProjectsRow;

const ProjectsRowContainer = styled(RowContainer)`
  width: 95%;
  min-height: 250px;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #D8C3A5;
  box-sizing: border-box;
  border-radius: 15px;
  margin: 15px auto 0px auto;
  padding: 15px;
`;

function buttonAnimation() {
  const rotation = keyframes`
    100% { 
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
    }
  `;
  return rotation;
}

const NewProjectButton = styled(RowContainer)`
  width: 32%;
  height: 250px;
  box-sizing: content-box;
  border-radius: 15px;
  background: #EAE7DC;
  margin: 0;
  margin-bottom: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0,0,0,0.75);
    
    & > img {
      -webkit-animation: ${buttonAnimation()} 0.5s linear;
      animation: ${buttonAnimation()} 0.5s linear;
    }
  }

  & > img {
    width: 33%;
    height: 33%;
    margin: auto;
  }
`;
