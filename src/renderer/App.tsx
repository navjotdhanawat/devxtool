import * as React from 'react';

import './tailwind.css';
import './custom.css';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Sidebar from './components/Card/sidebar';
import DiffChecker from './tools/diff-checker';
import MarkdownEditor from './tools/makdown-editor';
import Base64Converter from './tools/base64';

const App = () => {
  const theme = useSelector((state: any) => state.theme);
  console.log('theme', theme);
  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <div className="flex flex-row">
          <Sidebar className="p-3 basis-2/12 h-screen min-w-180 hidden md:block bg-base-200" />
          <div className="basis-8/12 sm:basis-10/12 h-screen min-w-180 bg-base-200">
            <div
              className="card m-2 bg-base-300 shadow-sm rounded-md"
              style={{ height: '96%' }}
            >
              <Routes>
                <Route index element={<DiffChecker />} />
                <Route path="/dc" element={<DiffChecker />} />
                <Route path="/mde" element={<MarkdownEditor />} />
                <Route path="/b64" element={<Base64Converter />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
