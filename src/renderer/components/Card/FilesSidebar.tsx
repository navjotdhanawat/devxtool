import React, { useState } from 'react';
import Accordion from './Accordion';
import File from './File';

export default function FilesSidebar() {
  const [folders, setFolders] = useState([
    {
      name: 'asdf 1',
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

  return (
    <div className="p-3">
      {/* Header */}
      <ul>
        {folders.map(({ name, count }, index) => {
          return (
            <li key={index}>
              <File name={name} count={count} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
