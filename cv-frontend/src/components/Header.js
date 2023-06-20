import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../contex';
import { IconSunHigh, IconMoon } from '@tabler/icons-react';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="flex flex-row justify-end gap-5 items-center pr-10 my-2">
      <button className="" onClick={toggleTheme}>
        {theme === 'light' ? (
          <IconSunHigh
            size={30}
            strokeWidth={2}
            color={theme === 'light' ? '#1f2937' : '#ffffff'}
          />
        ) : (
          <IconMoon size={30} strokeWidth={2} color={'#ffffff'} />
        )}
      </button>
      <button className="" onClick={() => changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}>
        {i18n.language.toUpperCase()}
      </button>
    </div>
  );
};

export default Header;
