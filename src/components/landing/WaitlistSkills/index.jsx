import React, { Component, useContext } from 'react';
import { Link, navigate } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details, Thumbnail, RegisterButton, Input} from './styles';
import styled from 'styled-components';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      time: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    const data = new FormData(event.target);
    fetch(
      "https://script.google.com/macros/s/AKfycbxoFCQkWmrK_F64X65l8zaFF4Q3tEuautcXDf8gRqf4Torc4JxuawEtVw/exec",
      { method: "POST", body: data }
    )
      .then(response => console.log("success!", response))
      .catch(error => console.error("error!", error.message));
    event.preventDefault();
    navigate("/submitted");
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                name="email"
                placeholder="name@example.com"
                value={this.state.email}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("email", event.target.value)
                  )
                }
              />
          <RegisterButton type="submit">submit</RegisterButton>
        </form>
    );
  }
}

export const WaitlistSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
      <Details theme={theme}>
      <h1>plöt waitlist</h1>
      <p><b><span aria-label="pencil" role="img">
        ✏️</span> enter your email for updates on developments!</b></p>
      <RegisterComponent/>
      </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
