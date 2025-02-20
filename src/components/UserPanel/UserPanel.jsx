import React from 'react';
import Button from '../Button';
import en from '../../translations/en.json';
import ru from '../../translations/ru.json';

const UserPanel = ({
  theme,
  toggleTheme,
  language,
  toggleLanguage,
  likes,
  toggleLike,
}) => {
  const likeIcon = likes > 0 ? '❤️' : '👍';
  const likeText = likes > 0 ? (language === 'en' ? en.liked : ru.liked) : (language === 'en' ? en.like : ru.like);

  const translations = language === 'en' ? en : ru;

  return (
    <div>
      <h1>{translations.title}</h1>
      <p>{translations.likes} {likes}</p>
      <div className='btns-cnt'>
        <Button onClick={toggleLike}>
        {likeIcon} {likeText}
        </Button>
        <Button onClick={toggleTheme}>
          {theme === 'light' ? translations.toggleTheme : translations.toggleTheme}
        </Button>
        <Button onClick={toggleLanguage}>
          {language === 'en' ? translations.toggleLanguage : translations.toggleLanguage}
        </Button>
      </div>
    </div>
  );
};

export default UserPanel;
