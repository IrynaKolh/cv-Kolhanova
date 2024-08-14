import React from 'react';
import {
  IconLocation,
  IconPhone,
  IconMail,
  IconBrandSkype,
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons-react';
import { Trans } from 'react-i18next';

const ContactsPage = () => {
  return (
    <div className="flex flex-col w-5/6 mx-auto mt-5 gap-3">
      <h2 className="text-center text-2xl md:text-3xl lg:my-5">
        <Trans i18nKey="contacts.title" />
      </h2>
      <div className="flex flex-row items-center gap-2">
        <IconLocation size={36} strokeWidth={2} color={'#0ea5e9'} />
        <p>
          <Trans i18nKey="contacts.location" />
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <IconPhone size={36} strokeWidth={2} color={'#0ea5e9'} />
        <p>
          <Trans i18nKey="contacts.phone" />
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <IconMail size={36} strokeWidth={2} color={'#0ea5e9'} />
        <p>
          <Trans i18nKey="contacts.email" />
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <IconBrandSkype size={36} strokeWidth={2} color={'#0ea5e9'} />
        <p>
          <Trans i18nKey="contacts.skype" />
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <IconBrandLinkedin size={36} strokeWidth={2} color={'#0ea5e9'} />
        <p>
          <a href="https://www.linkedin.com/in/iryna-kolhanova/" target="_blank" rel="noreferrer">
            <Trans i18nKey="contacts.linkedin" />
          </a>
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <IconBrandGithub size={36} strokeWidth={2} color={'#0ea5e9'} />
        <p>
          <a href="https://github.com/IrynaKolh" target="_blank" rel="noreferrer">
            <Trans i18nKey="contacts.github" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactsPage;
