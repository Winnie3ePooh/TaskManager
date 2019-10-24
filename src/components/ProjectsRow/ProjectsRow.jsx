import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { RowContainer } from '~/components/Containers/RowContainer';
import ProjectCard from '~/components/ProjectCard/ProjectCard';

const ProjectsRow = (props) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const handleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	const ProjectCards = ({ projectsList }) => {
		return projectsList.map(item => {
			return (
			<ProjectCard 
				key={item.id} 
				project={item}
				remove={props.removeProject}
			/>)
		});
	}

	const { projectsList, projectsType, openModal } = props;
	const rowHeight = 265 * (projectsList.length + 1);

	return (
		<ProjectsRowContainer>
			<ProjectsRowHeader onClick={handleCollapse}>
				{projectsType}
			</ProjectsRowHeader>
			<ProjectsRowContent
				className={isCollapsed ? 'active' : ''}
				isCollapsed={isCollapsed}
				rowHeight={rowHeight}
			>
				{projectsList && <ProjectCards projectsList={projectsList} />}
				<NewProjectButton onClick={openModal}>
					<i className="material-icons">add</i>
				</NewProjectButton>
			</ProjectsRowContent>
		</ProjectsRowContainer>
	);
}

export default ProjectsRow;

const ProjectsRowContainer = styled(RowContainer)`
	width: 95%;
	height: auto;
	flex-wrap: wrap;
	background: #d8c3a5;
	box-sizing: border-box;
	border-radius: 15px;
	margin: 15px auto 0px auto;
`;

const ProjectsRowHeader = styled(ProjectsRowContainer)`
	width: 100%;
	background: #eae7dc;
	margin: 0;
	padding: 10px;
	box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 0.75);
`;

const ProjectsRowContent = styled(ProjectsRowContainer)`
	width: 100%;
	max-height: 0;
	overflow: hidden;
	margin: 0;
	padding: 0;
	transition: max-height 0.25s ease-out, padding 0.25s linear;

	&.active {
		max-height: ${({ rowHeight }) => `${rowHeight}px`};
		padding: 15px;
		transition: max-height 0.25s ease-in, padding 0.25s linear;
	}
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
	background: #eae7dc;
	margin: 0 0.5% 15px 0;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

	&:nth-child(3n) {
		margin-right: 0;
	}

	&:hover {
		cursor: pointer;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);

		& > i {
			-webkit-animation: ${buttonAnimation()} 0.5s linear;
			animation: ${buttonAnimation()} 0.5s linear;
		}
	}

	& > i {
		margin: auto;
		font-size: 75px;
	}
`;
