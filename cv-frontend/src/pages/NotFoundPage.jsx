import { Link } from 'react-router-dom';
import React from 'react';
import { Trans } from 'react-i18next';

const NotFoundPage = () => {
  return (
    <div className="w-5/6 h-4/6 m-auto mt-12 flex justify-center">
      <div className="text-xl md:text-2xl flex flex-col items-center justify-center">
        <p>
          <Trans i18nKey="404page.p1" />
        </p>
        <p>
          <Trans i18nKey="404page.p2" />
          <Link to="/">
            <span className="text-sky-500">
              <Trans i18nKey="404page.span" />
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
