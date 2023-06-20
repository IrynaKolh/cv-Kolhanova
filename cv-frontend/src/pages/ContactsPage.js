import React from 'react';
import {
  IconLocation,
  IconPhone,
  IconMail,
  IconBrandSkype,
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons-react';

const ContactsPage = () => {
  return (
    <div className="flex flex-col w-5/6 mx-auto mt-5 gap-3">
      <h2 className="text-3xl my-5">Contacts</h2>
      <div className="flex flex-row items-center gap-2">
        <IconLocation size={36} strokeWidth={2} color={'#0ea5e9'} />
        <p>Cleveland, OH, USA</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <IconPhone size={36} strokeWidth={2} color={'#0ea5e9'} />
        <p>Phone: +1-216-376-1912 </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <IconMail size={36} strokeWidth={2} color={'#0ea5e9'} />
        <p>E-mail: iryna.kolhanova@gmail.com</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <IconBrandSkype size={36} strokeWidth={2} color={'#0ea5e9'} />
        <p>Skype: belkin1987</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <IconBrandLinkedin size={36} strokeWidth={2} color={'#0ea5e9'} />
        <p>
          <a
            href="https://www.linkedin.com/in/iryna-kolhanova-46128266/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin: Iryna Kolhanova
          </a>
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <IconBrandGithub size={36} strokeWidth={2} color={'#0ea5e9'} />
        <p>
          <a href="https://github.com/IrynaKolh" target="_blank" rel="noreferrer">
            Githab: Iryna Kolhanova
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactsPage;
