import * as React from 'react';

import './tailwind.css';
import './custom.css';

import {
  Route,
  BrowserRouter,
  Routes,
  Link,
  useNavigate,
} from 'react-router-dom';

import Sidebar from './components/Card/sidebar';
import Header from './components/Card/Header';
import DiffChecker from './tools/diff-checker';
import MarkdownEditor from './tools/makdown-editor';
import Base64Converter from './tools/base64';

const App = () => (
  <BrowserRouter>
    <Header />
    <div className="flex flex-row">
      <div className=" basis-2/12 h-screen min-w-180 drop-shadow-md bg-sidebar hidden md:block">
        <Sidebar />
      </div>
      {/* <div className="basis-2/12 h-screen min-w-180 drop-shadow-md bg-file-section">
        <FilesSidebar />
      </div> */}
      <div className="basis-8/12 sm:basis-10/12 h-screen min-w-180 drop-shadow-md">
        <div
          className="card m-2 bg-base-100 shadow-sm rounded-md"
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
);

export default App;

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
