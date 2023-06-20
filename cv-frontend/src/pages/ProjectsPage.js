import React from 'react';
import projects from '../data/projects.json';
import Project from '../components/Project';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl my-5">My Projects</h2>
      <ul className="flex flex-col gap-10 justify-center max-w-screen-lg">
        {projects.map((project, index) => (
          <li key={index}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
