import React, { Component, useContext } from 'react';
import { navigate } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, RegisterButton, Input} from './deletionstyles';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class Deletion extends Component {
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
      "https://script.google.com/macros/s/AKfycbx9Oq0mCAtBZVd7J9cNm9uixc1Gd4PUKoLVU052haW7yZvyy2z4h2Q5a51ZO78ojScZ/exec",
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
          <Wrapper>
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
          </Wrapper>
        </form>
    );
  }
}

export default Deletion;
