import react, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import OtherPage from './pages/OtherPage';
import ContactsPage from './pages/ContactsPage';
import Layout from './components/Layout';
import {ThemeContext} from './contex';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	}

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="other" element={<OtherPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
