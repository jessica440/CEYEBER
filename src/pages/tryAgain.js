import React from 'react';

import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { H1, H2 } from '../components/Text';
import { gameOverPageTheme } from './../components/themes';

const TryAgain = ({ failMessage, setTimeLeft }) => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
    setTimeLeft(15);
  };

  return (
    <ThemeProvider theme={gameOverPageTheme}>
      <H1>Incorrect!</H1>
      <div className="alert" />
      <H2>{failMessage}</H2>
      <Button onClick={handleClick}>TRY AGAIN</Button>
    </ThemeProvider>
  );
};

export default TryAgain;
