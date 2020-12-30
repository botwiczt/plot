import React, { Component }  from "react"
import { Link, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";

const DesktopForm = styled.header`
  @media (max-width: 672px) {
   display:none;
  }
`;

const DesktopFormInner = styled.header`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 672px) {
   display:none;
  }
`;

const MobileForm = styled.header`
  @media (min-width: 672px) {
   display:none;
  }
  @media (max-width: 672px) {
   display:initial;
  }
`;

const MobileFormInner = styled.header`
  @media (min-width: 672px) {
   display:none;
  }
  @media (max-width: 672px) {
   display:initial;
   text-align: center;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
  }
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const MobileLogo = styled.img`
  display: block;
  margin: auto;
  width: 80%;
`;

const SubLine = styled.h1`
  font-size: 16px;
`;

const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  background: #DCDCDC;
  border: none;
  border-radius: 10px 0 0 10px;
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
`;

const Button = styled.button`
  width: auto;
  cursor: pointer;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 0 10px 10px 0;
  :hover {
    box-shadow: inset 0 0 100px 100px #444d56;
  }
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
`;

const BackButton = styled.img`
  display: table;
  position: absolute;
  width: 10%;
  margin-left: 2%;
  margin-top: 2%;
  cursor: pointer;
  @media only screen and (min-width: 1200px) {
      width: 8%;
    }
`;

const MobileBackButton = styled.img`
  display: table;
  position: absolute;
  width: 10%;
  margin-left: 2%;
  margin-top: 2%;
  cursor: pointer;
  @media only screen and (min-width: 1200px) {
      width: 8%;
    }
`;

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
    navigate("/formsubmitted");
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
          <Button type="submit">submit</Button>
        </form>
    );
  }
}

class RegisterComponentMobile extends Component {
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
    navigate("/formsubmitted");
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
              <br/><Input
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
          <br/><br/><Button type="submit">submit</Button>
        </form>
    );
  }
}

const plotStore = () => (
  <Layout>
    <SEO title="plöt form" keywords={[`plot`, `form`, `waitlist`]}/>
    <DesktopForm>
      <Link to="/">
        <BackButton src="/leftarrow.svg" />
      </Link>
      <DesktopFormInner>
        <Logo src="/logo.png"/>
        <h1>
          plöt waitlist
        </h1>
        <SubLine>
          <span role="img" aria-label="pencil emoji">✏️</span> enter your email for updates on developments!
        </SubLine>
        <RegisterComponent/>
      </DesktopFormInner>
    </DesktopForm>
    <MobileForm>
      <Link to="/">
        <MobileBackButton src="/leftarrow.svg"/>
      </Link>
      <MobileFormInner>
        <MobileLogo src="/logo.png"/>
        <h1>
          plöt waitlist
        </h1>
        <SubLine>
          <span role="img" aria-label="pencil emoji">✏️</span> enter your email for updates on developments!
        </SubLine>
        <RegisterComponentMobile/>
        </MobileFormInner>
    </MobileForm>
  </Layout>
)

export default plotStore
