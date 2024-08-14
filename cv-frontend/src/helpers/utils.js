export const getTheme = () => {
  return localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
};

export const getLang = () => {
  return localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextL') : 'en';
};
