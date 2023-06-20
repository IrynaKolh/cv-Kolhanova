import React, { useContext } from 'react';
import { IconCircleLetterC } from '@tabler/icons-react';
import { ThemeContext } from '../contex';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <IconCircleLetterC
        size={20}
        strokeWidth={2}
        color={theme === 'light' ? '#1f2937' : '#ffffff'}
      />
      <span> 2023 Iryna Kolhanova </span>
    </div>
  );
};

export default Footer;
