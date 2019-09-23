import React from 'react';
import styled, { keyframes } from 'styled-components';

import { RowContainer } from '~/components/Containers/RowContainer';
import ProjectCard from '~/components/ProjectCard/ProjectCard';
import NewProjectsForm from '~/components/NewProjectsForm/NewProjectsForm';

import AddLogo from '~/assets/add.svg';

function ProjectCards ({ projects }) {
  return projects.map((item) =>
      <ProjectCard key={item.id} project={item} />
  );
}

class ProjectsRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    
  }

  openModal(e) {
    this.setState({
      isModalOpen: true,
    });
    console.log(e);
  }

  closeModal(e) {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    const projects = this.props.projects;
    return (
      <React.Fragment>
        <ProjectsRowContainer>
            <ProjectCards projects={projects} />
            <NewProjectButton onClick={this.openModal}>
              <img src={AddLogo} alt='Add'/>
            </NewProjectButton>
        </ProjectsRowContainer>
        <NewProjectsForm isVisible={this.state.isModalOpen} closeModal={this.closeModal}></NewProjectsForm>
      </React.Fragment>
    );
  }
}

export default ProjectsRow;

const ProjectsRowContainer = styled(RowContainer)`
  width: 95%;
  height: auto;
  flex-wrap: wrap;
  background: #D8C3A5;
  box-sizing: border-box;
  border-radius: 15px;
  margin: 15px auto 0px auto;
  padding: 15px;
`;

function buttonAnimation() {
  const rotation = keyframes`
    0 { 
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
    } 100% {
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
    }
  `;
  return rotation;
}

const NewProjectButton = styled(RowContainer)`
  width: 33%;
  height: 250px;
  box-sizing: content-box;
  border-radius: 15px;
  background: #EAE7DC;
  margin: 0 0.5% 15px 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);

  &:nth-child(3n) {
    margin-right: 0;
  }

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
