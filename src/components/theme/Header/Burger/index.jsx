import React, {useContext} from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, Bar } from './styles';

const Burger = ({ sidebar, toggle }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
      <Bar top sidebar={sidebar} theme={theme}/>
      <Bar bottom sidebar={sidebar} theme={theme} />
    </Wrapper>
  )
};

export default Burger;
