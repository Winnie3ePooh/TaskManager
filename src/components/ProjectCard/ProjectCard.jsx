import React from 'react';
import styled from 'styled-components';

import {RowContainer} from '~/components/Containers/RowContainer';
import EditLogo from '~/assets/edit.svg';

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
        <img src={EditLogo} alt='Edit' />
      </ProjectCardContainer>
    );
  }
}

export default ProjectCard;

const ProjectCardContainer = styled(RowContainer)`
  width: 33%;
  height: 250px;
  position: relative;
  box-sizing: content-box;
  border-radius: 15px;
  background: #EAE7DC;
  margin: 0 0.5% 15px 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  
  &:nth-child(3n) {
    margin-right: 0;
  }

  & > img {
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover{
    cursor: pointer;

    img {
      display: block;
      background: #d9d3bf;
      opacity: 0.5;
      margin: auto;
    }
  }
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