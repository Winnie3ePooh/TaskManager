import React from "react";
import ProjectsPage from '~/pages/ProjectsPage/ProjectsPage';
import NewProjectsForm from '~/components/NewProjectsForm/NewProjectsForm'

const routes = [
  { 
    id: 0,
    text: "Main",
    path: "/",
    exact: true,
    main: () => <ProjectsPage></ProjectsPage>
  },
  { 
    id: 1,
    text: "Add new project",
    path: "/project/new",
    main: () => <NewProjectsForm></NewProjectsForm>
  },
  { 
    id: 2,
    text: "Current Project",
    path: "/project/:id",
    main: () => <h1>Alive</h1>
  },
];

export default routes;
