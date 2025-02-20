import React from 'react';
import UserPanelContainer from './components/UserPanel/UserPanelContainer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { LikesProvider } from './context/LikesContext';

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LikesProvider>
          <UserPanelContainer />
        </LikesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
