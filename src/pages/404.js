import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  @media (max-width: 1200px) {
   width: 50%;
  }
`;

const ErrorContent = styled.p`
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 10px;
  transition: all 0.5s ease;

  :hover {
    box-shadow: inset 0 0 100px 100px #444d56;
    transform: scale(1.15);
  }
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Link to="/">
      <Logo src="/logo.png" />
    </Link>
    <ErrorContent>
    <h1>404: not found</h1>
    <p>this page does not exist.</p>
    <Link to="/"><Button>return home</Button></Link>
    </ErrorContent>
  </Layout>
)
export default NotFoundPage
