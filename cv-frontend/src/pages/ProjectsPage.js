import React from 'react';
import projects from '../data/projects.json';
import Project from '../components/Project';
import { Trans } from 'react-i18next';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-2xl md:text-3xl mt-3 md:mt-7">
        <Trans i18nKey="project.title" />
      </h2>
      <ul className="flex flex-col gap-10 justify-center max-w-screen-lg">
        {projects.map((project, index) => (
          <li key={index}>
            <Project project={project} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
