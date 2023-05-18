import React, { useState } from 'react';
import Accordion from './Accordion';
import Folder from './Folder';
import Tools from 'renderer/Tools';

export default function Sidebar() {
  const [folders, setFolders] = useState([
    {
      name: 'Folder 1',
      count: 50,
    },
    {
      name: 'Folder 2',
      count: 540,
    },
    {
      name: 'Folder 3',
      count: 250,
    },
    {
      name: 'Folder 4',
      count: 350,
    },
  ]);

  const [devTools] = useState([
    {
      name: 'Diff Checker',
      count: 50,
      icon: 'AiFillDiff',
    },
    {
      name: 'Folder 2',
      count: 540,
    },
    {
      name: 'Folder 3',
      count: 250,
    },
    {
      name: 'Folder 4',
      count: 350,
    },
  ]);

  return (
    <div className="p-3">
      <Tools />
      <Accordion title="Dev Tools">
        <ul>
          {devTools.map(({ name, count }, index) => {
            return (
              <li key={index}>
                <Folder name={name} count={count} />
              </li>
            );
          })}
        </ul>
      </Accordion>
      <Accordion title="Google">
        {/* Folders */}
        <ul>
          {folders.map(({ name, count }, index) => {
            return (
              <li key={index}>
                <Folder name={name} count={count} />
              </li>
            );
          })}
        </ul>
      </Accordion>
      <Accordion title="Others">
        {/* Folders */}
        <ul>
          {folders.map(({ name, count }, index) => {
            return (
              <li key={index}>
                <Folder name={name} count={count} />
              </li>
            );
          })}
        </ul>
      </Accordion>
    </div>
  );
}
