import React from 'react';
import { IconLink } from '@tabler/icons-react';

const EducationPage = () => {
  return (
    <div className="w-5/6 mx-auto mt-5 flex flex-col gap-3">
      <h2 className="text-3xl my-5">My Education</h2>
      <div>
        <p>
          <b className="text-lg my-1">Diploma: </b>Bachelor and Master degrees in Sociology and
          Social Work
        </p>
        <p className="flex flex-row gap-2 items-center">
          V. N. Karazin Kharkiv National University
          <a href="https://karazin.ua/en/" target="_blank" rel="noreferrer">
            <IconLink size={20} strokeWidth={1} color={'#0ea5e9'} />
          </a>
        </p>
      </div>
      <div>
        <p className="text-lg my-1">
          <b>Courses: </b>
        </p>
        <ul>
          <li className="flex flex-row gap-2 items-center">
            <b>RS School: </b>JavaScript, TypeScript, React, Angular, NodeJS, AWS Fundamental
            <a
              className="flex flex-row items-center text-sky-500"
              href="https://app.rs.school/cv/76ff4781-a918-470b-9c8f-2626607a1ec8"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <IconLink size={20} strokeWidth={1} color={'#0ea5e9'} /> Certificates
            </a>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <b>AWS: </b>AWS Cloud Quest: Cloud Practitioner
            <a
              className="flex flex-row items-center text-sky-500"
              href="https://www.credly.com/badges/503868b4-63ee-4e74-a366-1bf7b7bd3f46/linked_in_profile"
            >
              {' '}
              <IconLink size={20} strokeWidth={1} color={'#0ea5e9'} /> AWS Certification
            </a>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <b>EPAM (University program): </b>Front-end Program (JavaScript, React, Angular,
            NodeJS), Automated Testing
            <a href="https://training.epam.ua/#!/Home?lang=en" target="_blank" rel="noreferrer">
              <IconLink size={20} strokeWidth={1} color={'#0ea5e9'} />
            </a>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <b>RedRover School: </b> Automation Testing (Cypress), Front-end (React)
            <a
              href="https://www.linkedin.com/company/redrover-school/"
              target="_blank"
              rel="noreferrer"
            >
              <IconLink size={20} strokeWidth={1} color={'#0ea5e9'} />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-lg my-1">
          <b>Achievement: </b>
        </p>
        <div className="flex flex-row items-center gap-2">
          <p>Codewars</p>
          <a
            href="https://www.codewars.com/users/rsschool_c1960b19d8371dcf"
            target="_blank"
            rel="noreferrer"
          >
            <IconLink size={20} strokeWidth={1} color={'#0ea5e9'} />
          </a>
          <img
            src="https://www.codewars.com/users/rsschool_c1960b19d8371dcf/badges/micro"
            alt="Codewars"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
