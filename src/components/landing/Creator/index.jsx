import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { GenericHeader } from 'components/theme';
import { Container } from 'components/common';
import { MeThumbnail, SkillsWrapper, Details } from './styles';
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
      <MeThumbnail>
        <Me/>
      </MeThumbnail>
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>
            created by</h1><h2><b>tomek botwicz</b>.
          </h2>
        </Details>
      </SkillsWrapper>
    </div>
  );
};
