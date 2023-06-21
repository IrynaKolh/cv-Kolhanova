import react, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import OtherPage from './pages/OtherPage';
import ContactsPage from './pages/ContactsPage';
import Layout from './components/Layout';
import { ThemeContext } from './contex';
import { getTheme } from './helpers/utils';
import { withTranslation } from 'react-i18next';

function App() {
  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          {/* <Route path="other" element={<OtherPage />} /> */}
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default withTranslation()(App);
