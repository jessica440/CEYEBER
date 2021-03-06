import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fieldPageTheme } from './../components/themes';
import { ImageQuestion } from './../components/Questions';
import {
  CorrectButton,
  IgnoreButton,
  WrongButton
} from './../components/AnswerButtons';
import eagle from './../images/eagleTakesChild.jpg';

const FirstCasePage = ({
  points,
  setPoints,
  taskName,
  setTaskName,
  badgesWon,
  setBadgesWon,
  theme,
  setTheme
}) => {
  setTheme('dark-theme');
  const title = 'Case One';

  React.useEffect(() => {
    setTaskName('Troll Hunter');
  }, []);

  const img = eagle;
  const question = `Your friend Sam just shared a VIRAL video of 
    a golden eagle picking up a child and flying away with it!`;

  return (
    <ThemeProvider theme={fieldPageTheme}>
      <ImageQuestion title={title} img={img} question={question} />
      <IgnoreButton
        points={points}
        setPoints={setPoints}
        label="Ignore the video"
        nextPage={'try-again'}
      />
      <WrongButton
        points={points}
        setPoints={setPoints}
        label="Share the video"
        nextPage={'try-again'}
      />
      <CorrectButton
        points={points}
        setPoints={setPoints}
        label="Check it's true or fake"
        nextPage={'/badge'}
        taskName={taskName}
        setBadgesWon={setBadgesWon}
        badgesWon={badgesWon}
      />
    </ThemeProvider>
  );
};

export default FirstCasePage;
