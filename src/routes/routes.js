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
];

export default routes;
