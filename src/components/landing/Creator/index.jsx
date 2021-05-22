import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { GenericHeader } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, MeThumbnail, Details } from './styles';
import { StaticImage } from "gatsby-plugin-image";

function Me() {
 return (
   <StaticImage
     src={"./me.jpg"}
     alt="image of tomek botwicz, creator of plöt."
   />
 )
}

export const Creator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <GenericHeader/>
      <Wrapper as={Container}>
        <MeThumbnail>
          <Me/>
        </MeThumbnail>
        <Details theme={theme}>
          <h1>
            created by</h1><h2>tomek botwicz.
          </h2>
        </Details>
      </Wrapper>
    </div>
  );
};
