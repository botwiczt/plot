import React, { Component, useContext } from 'react';
import { navigate } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Details, RegisterButton, Input} from './styles';

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
      "https://script.google.com/macros/s/AKfycbxhJ5H0LohP2yB6Rfpfl4Y_XqWcpZV3dGifTti2XIUu6WEdrp2ZMReLkE9QOY3hl5w1dg/exec",
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
                required
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

export const Waitlist = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Wrapper as={Container}>
      <Details theme={theme}>
      <h1>plöt waitlist</h1>
      <p><span aria-label="pencil" role="img">
        ✏️</span> enter your email for updates on developments!</p>
      <RegisterComponent/>
      </Details>
      </Wrapper>
    </div>
  );
};
