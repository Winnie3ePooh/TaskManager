import React from 'react';
import styled, {keyframes} from 'styled-components';

import { RowContainer } from '~/components/Containers/RowContainer';

class NewProjectsForm extends React.Component {
  constructor(props) {
    super(props);
    this.addNewProject = this.addNewProject.bind(this);
    console.log(props);
  }

  componentDidMount() {
  }

  addNewProject(e) {
    console.log(e);
  }

  render() {
    const isVisible = this.props.isVisible;
    return isVisible && (
      <React.Fragment>
        <NewProjectsFormContainer />
        <FormContainer>
          <ButtonClose onClick={this.props.closeModal}>1</ButtonClose>
        </FormContainer>
      </React.Fragment>
    );
  }
}

export default NewProjectsForm;

const NewProjectsFormContainer = styled(RowContainer)`
  height: 100%;
  margin-top: 0;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: black;
`;

const ButtonClose = styled.div`
  position: absolute;
  right: 0;
  margin: 20px 20px 0 0;

  &:hover {
    cursor: pointer;
  }
`;

const FormContainer = styled.div`
  width: 750px;
  height: 750px;
  background: #EAE7DC;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
  -webkit-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.75);
`;