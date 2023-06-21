import React, { useContext } from 'react';
import { IconCircleLetterC } from '@tabler/icons-react';
import { ThemeContext } from '../contex';
import { Trans } from 'react-i18next';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="flex flex-row gap-2 items-center justify-center">
      <IconCircleLetterC
        size={20}
        strokeWidth={2}
        color={theme === 'light' ? '#1f2937' : '#ffffff'}
      />
      <span>
        2023 <Trans i18nKey="footer" />{' '}
      </span>
    </footer>
  );
};

export default Footer;
