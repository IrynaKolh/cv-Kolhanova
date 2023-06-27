import React from 'react';
import { Trans } from 'react-i18next';

const HomePage = () => {
  return (
    <div className="w-5/6 mx-auto mt-5">
      <div className="flex flex-col-reverse items-center lg:flex-row justify-around text-center gap-5">
        <div>
          <h1 className="text-2xl md:text-5xl flex flex-wrap items-end justify-center md:block lg:my-5">
            <Trans i18nKey="homepage.name" /> |
            <span className="text-lg ml-1">
              <Trans i18nKey="homepage.jobTitle" />
            </span>
          </h1>
          <h3 className="text-lg md:text-2xl text-left my-2">
            <Trans i18nKey="homepage.summary" />
          </h3>
          <p className="text-left">
            <Trans i18nKey="homepage.text" />
          </p>
          <h3 className="text-lg md:text-2xl text-left mt-4 mb-2">
            <Trans i18nKey="homepage.skills" />
          </h3>
          <ul className="flex flex-col flex-wrap text-left">
            <li>
              <b>
                <Trans i18nKey="homepage.langs" />
              </b>
              JavaScript (ES6+), TypeScript, HTML5, CSS3 (preprocessors: Sass, Less), NodeJS
            </li>
            <li>
              <b>
                <Trans i18nKey="homepage.libs" />
              </b>
              React, Angular, Material UI, Bootstrap, TailwindCSS, Mantine, Express, Next.js
            </li>
            <li>
              <b>
                <Trans i18nKey="homepage.tools" />
              </b>
              Git/GitHub, Webpack, Gulp, Docker, Figma, Postman, Swagger
            </li>
            <li>
              <b>
                <Trans i18nKey="homepage.pm" />{' '}
              </b>
              Jira, Trello, Slack, Discord
            </li>
            <li>
              <b>
                <Trans i18nKey="homepage.ide" />{' '}
              </b>
              VSCode, IntelliJ IDEA, WebStorm
            </li>
            <li>
              <b>
                <Trans i18nKey="homepage.test" />{' '}
              </b>
              Cypress, Jest, RTL
            </li>
            <li>
              <b>
                <Trans i18nKey="homepage.db" />
              </b>
              MySQL, PostgreSQL, MongoDB, FireBase
            </li>
            <li>
              <Trans i18nKey="homepage.li1" />
            </li>
            <li>
              <Trans i18nKey="homepage.li2" />
            </li>
            <li>
              <Trans i18nKey="homepage.li3" />
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="h-64 w-64 rounded-full lg:w-auto lg:h-auto shadow-xl shadow-cyan-500/50"
            src="./assets/my-photo3.jpg"
            alt="Iryna"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
