import React from 'react';
import styled, {keyframes} from 'styled-components';

import DatePicker from "react-datepicker";
import { RowContainer } from '~/components/Containers/RowContainer';

import CloseLogo from '~/assets/close.svg';

class NewProjectsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(),
    };

    this.inputForm = React.createRef(); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      title: this.inputForm.current[0].value,
      description: this.inputForm.current[1].value,
      dateStart: this.inputForm.current[2].value,
      dateEnd: this.inputForm.current[3].value,
      isDone: false,
    }

    this.props.handleAddNewProject(newProject);
  }

  render() {
    const isVisible = this.props.isVisible;
    return isVisible && (
      <React.Fragment>
        <NewProjectsFormContainer />
        <FormsContainer>
          <ButtonClose onClick={this.props.closeModal}>
            <img src={CloseLogo} alt='Close'/>
          </ButtonClose>
          <FormContainer ref={this.inputForm} onSubmit={this.handleSubmit}>
            <InputRow>
              <label htmlFor='pName'>Project name</label>
              <input id='pName' type='text'></input>
            </InputRow>
            <InputRow>
              <label htmlFor='pDescr'>Project description</label>
              <textarea id='pDescr' cols="40" rows="10"></textarea>
            </InputRow>
            <InputRow type='inline'>
              <label htmlFor='pDescr'>Start date</label>
              <StyledDatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </InputRow>
            <InputRow type='inline'>
              <label htmlFor='pDescr'>End date</label>
              <StyledDatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </InputRow>
            <SubmitButton type='submit'>Add</SubmitButton>
          </FormContainer>
        </FormsContainer>
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

  & img {
    width: 100%;
    height: 100%;
    margin: auto;
    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const FormsContainer = styled.div`
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

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  margin: 100px 24px;
  padding: 15px 7.5px;
  border: 1px solid #7d5f36;
  border-radius: 10px;
`;

const InputRow = styled.div`
  width: ${props => props.type === 'inline' ? '50%' : '100%'};

  & > label,
  & > input {
    display: block;
  }

  & > label {
    font-size: 18px;
    font-weight: bold;
  }

  & > input,
  & > textarea {
    width: 100%;
    box-sizing: border-box;
    border: 2px solid #D8C3A5;
    border-radius: 5px;
    margin: 10px 0;
    padding-left: 5px;
    
    &:focus {
      outline: none;
    }
  }

  & > input {
    height: 30px;
  }
`;

const SubmitButton = styled.button`
  width: 25%;
  background: #D8C3A5;
  border: 1px solid #7d5f36;
  margin-top: 20px;
  padding: 15px;
  font-size: 18px;
  color: #7d5f36;
  text-transform: uppercase;
  transition: all .2s ease-in-out;

  &:focus {
      outline: none;
  }

  &:hover {
    background: #7d5f36;
    color: #D8C3A5;
    border-color: #D8C3A5;
    cursor: pointer;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  height: 30px;
  box-sizing: border-box;
  border: 2px solid #D8C3A5;
  border-radius: 5px;
  margin: 10px 0;
  padding-left: 5px;
`;