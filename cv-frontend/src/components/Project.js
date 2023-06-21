import React from 'react';
import { IconBrandGithub, IconTransferIn } from '@tabler/icons-react';
import { Trans } from 'react-i18next';

const Project = ({ project, index }) => {
  return (
    <div className="shadow-lg shadow-cyan-500/50 rounded-lg flex flex-row">
      <img
        className="rounded-t-lg p-3 min-w-xs max-w-xl object-cover object-center"
        src={project.imgUrl}
        alt="project"
      />
      <div className="px-5 pb-5 flex flex-col justify-center">
        <h3 className="font-semibold text-xl tracking-tight text-center">
          <Trans i18nKey={`project.${index}.name`} />
        </h3>
        <div className="flex flex-col items-center mt-2.5 mb-5">
          {project.team && (
            <button className="self-end h-7 px-1 shadow rounded-lg bg-sky-100 my-class">
              <Trans i18nKey="project.team" />
            </button>
          )}
          <p>
            <Trans i18nKey={`project.${index}.description`} />
          </p>
          <div className="flex flex-row flex-wrap gap-1 m-3 justify-center">
            {project.skills.map((skill, index) => (
              <button key={index} className="h-8 px-1 shadow bg-sky-100 rounded-lg my-class">
                {skill}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="text-white h-10 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300  rounded-lg  px-5 py-2.5 flex flex-row items-center gap-2"
          >
            <span>
              <Trans i18nKey="project.demo" />
            </span>
            <IconTransferIn size={28} strokeWidth={2} color={'#ffffff'} />
          </a>
          {project.github !== '' && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-white h-10 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300  rounded-lg  px-5 py-2.5 flex flex-row items-center gap-2"
            >
              <span>
                <Trans i18nKey="project.code" />
              </span>
              <IconBrandGithub size={28} strokeWidth={2} color={'#ffffff'} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;

// (parameter) project: {
//   name: string;
//   imgUrl: string;
//   url: string;
//   github: string;
//   level: string;
//   description: string;
//   skills: string[];
//   team: boolean;
// }
