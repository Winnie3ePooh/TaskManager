import React from 'react';
import styled from '@emotion/styled';

import ProjectsRow from '~/components/ProjectsRow/ProjectsRow';
import NewProjectsForm from '~/components/NewProjectsForm/NewProjectsForm';

import { MainContainer } from '~/components/Containers/MainContainer';

import db from '~/db/db';
import { addProject, removeProject } from '~/db/projects';

class ProjectsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      projectsList: [],
      isModalOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAddNewProject = this.handleAddNewProject.bind(this);
    this.handleRemoveProject = this.handleRemoveProject.bind(this);
  }

  async componentDidMount() {
    const userProjects = await db.table('projects').toArray();
    this.setState({
      projectsList: userProjects,
    });
  }

  async handleAddNewProject(data) {
    const id = await addProject(data);
    const newProjectsList = [...this.state.projectsList, Object.assign({}, data, { id })];
    this.setState({
      projectsList: newProjectsList,
    });
    this.closeModal();
  }

  async handleRemoveProject(id) {
    const success = await removeProject(id);
    if (success) {
      const userProjects = await db.table('projects').toArray();
      this.setState({
        projectsList: userProjects,
      });
    }
	}

	async handleEditProject(id) {
		console.log(id);
	}

  openModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    const { projectsList } = this.state;
    return (
      <ProjectsPageContainer>
        <ProjectsRow
          projectsList={projectsList}
          projectsType='Personal'
          openModal={this.openModal}
          removeProject={this.handleRemoveProject}
        />
        <NewProjectsForm
          isVisible={this.state.isModalOpen}
          closeModal={this.closeModal}
          handleAddNewProject={this.handleAddNewProject}
        />
      </ProjectsPageContainer>
    );
  }
}

export default ProjectsPage;

const ProjectsPageContainer = styled(MainContainer)`
  background: #8e8d8a;
  width: 90%;
  height: calc(100% - 75px);
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  flex-direction: column;
  margin: 0 auto;
`;
