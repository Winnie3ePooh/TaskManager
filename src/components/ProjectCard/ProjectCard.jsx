import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { RowContainer } from '~/components/Containers/RowContainer';
import Dropdown from '../Dropdown/Dropdown';

const menuItems = [
  { id: 1, label: 'Open'},
  { id: 2, label: 'Edit'},
  { id: 3, label: 'Remove'},
];

function ProjectCard(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const project = props.project;
  const handleMouseLeave = () => setMenuOpen(!isMenuOpen);

  return (
    <ProjectCardContainer>
      <CardHeaderContainer>{project.title}</CardHeaderContainer>
      <CardContentContainer>{project.description}</CardContentContainer>
      <CardFooterContainer>
        <FooterElem>Start date: {project.dateStart}</FooterElem>
        <FooterElem>End date: {project.dateEnd}</FooterElem>
        <FooterElem>Is completed: {project.isDone ? 'Yea' : 'Nope'}</FooterElem>
        <FooterElem>Is expired: {project.isDone ? '1' : '2'}</FooterElem>
      </CardFooterContainer>
      <MenuButton onClick={() => setMenuOpen(!isMenuOpen)}>
        <i className="material-icons">dehaze</i>
        <Dropdown data={menuItems} isOpen={isMenuOpen} closeIt={handleMouseLeave} />
      </MenuButton>
    </ProjectCardContainer>
  );
}

export default ProjectCard;

const borderRadius = () => `
  border-radius: 15px;
`;

const ProjectCardContainer = styled(RowContainer)`
  width: 33%;
  height: 250px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  border: 2px solid transparent;
  background: #eae7dc;
  margin: 0 0.5% 15px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  ${borderRadius}

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    border-color: #7d5f36;
  }
`;

const baseCardPart = () => `
  padding: 1% 5%;
`;

const underlineBorder = border => `
  content: '';
  width: 100%;
  display: inline-block;
  margin: 0 auto;
  ${border}: 1px solid #e98074;
`;

const CardHeaderContainer = styled.h2`
  height: 25%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  color: #e98074;
  ${baseCardPart}

  &::after {
    ${underlineBorder('border-bottom')}
  }
`;

const CardContentContainer = styled.div`
  height: 50%;
  font-size: 16px;
  ${baseCardPart}
`;

const CardFooterContainer = styled.div`
  height: 25%;
  display: flex;
  flex-wrap: wrap;
  ${baseCardPart}
  padding-top: 0;

  &::before {
    ${underlineBorder('border-top')}
    padding-bottom: 1%;
  }
`;

const FooterElem = styled.div`
  width: 50%;
  box-sizing: border-box;
`;

const MenuButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
  background: none;
  border: none;
  color: #8e8d8a;
  font-size: 17px;
  font-weight: bold;
  position: absolute;
  top: 5%;
  right: 5%;
  padding: 0;
  transition: color 0.25s linear;

  & > i:hover {
    cursor: pointer;
    color: #000000;
    transition: color 0.25s linear;
  }
`;
