import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from './utils/icons';

export default function Tools() {
  const [devTools] = useState([
    {
      name: 'Diff Checker',
      icon: 'AiFillDiff',
      route: '/dc',
    },
    {
      name: 'Markdown Editor',
      icon: 'AiFillFileMarkdown',
      route: '/mde',
    },
    {
      name: 'Base64 Utility',
      icon: 'AiFillFileMarkdown',
      route: '/b64',
    },
  ]);

  return (
    <div className="p-3">
      <ul>
        {devTools.map(({ name, icon, route }, index) => {
          const Icon = Icons[icon];

          return (
            <li key={index}>
              <Link to={route}>
                <h4 className="flex items-center relative mb-2 text-blue-600">
                  <Icon className="text-md" />
                  <span className="ml-2 text-sm truncate w-28">{name}</span>
                  <span className="ml-2 text-sm absolute right-2 text-gray-400" />
                </h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
