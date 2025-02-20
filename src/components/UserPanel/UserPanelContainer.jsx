import React, { useEffect } from 'react';
import UserPanel from './UserPanel';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { useLikes } from '../../hooks/useLikes';

const UserPanelContainer = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { likes, toggleLike } = useLikes();

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  return (
    <UserPanel
      theme={theme}
      toggleTheme={toggleTheme}
      language={language}
      toggleLanguage={toggleLanguage}
      likes={likes}
      toggleLike={toggleLike}
    />
  );
};

export default UserPanelContainer;
