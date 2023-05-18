// import './style.scss';

import Prism from 'prismjs';
import 'prismjs/components/prism-json'; // Language
import 'prismjs/themes/prism-coy.css'; // Theme

import { MouseEvent, useEffect, useState } from 'react';

import ReactDiff from 'react-diff-viewer-continued';
import { AiFillFileAdd } from 'react-icons/ai';

const DiffChecker = (): JSX.Element => {
  const [highlightLine, setHighlightLine] = useState<string[]>([]);
  const [splitView, setSplitView] = useState<boolean>(true);
  const [isSyntaxHighlight, setIsSyntaxHighlight] = useState<boolean>(true);
  const [oldContent, setOldContent] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');
  const [oldFile, setOldFile] = useState<string>('');
  const [newFile, setNewFile] = useState<string>('');

  const onLineNumberClick = (
    id: string,
    e: MouseEvent<HTMLTableCellElement>
  ): void => {
    let clickedLine = [id];
    if (e.shiftKey && clickedLine.length === 1) {
      const [dir, oldId] = clickedLine[0].split('-');
      const [newDir, newId] = id.split('-');
      if (dir === newDir) {
        clickedLine = [];
        const lowEnd = Math.min(Number(oldId), Number(newId));
        const highEnd = Math.max(Number(oldId), Number(newId));
        for (let i = lowEnd; i <= highEnd; i += 1) {
          clickedLine.push(`${dir}-${i}`);
        }
      }
    }
    setHighlightLine(clickedLine);
  };

  const syntaxHighlight = (str: string): any => {
    if (!str) return <></>;
    const language = Prism.highlight(str, Prism.languages.javascript, 'json');
    return <span dangerouslySetInnerHTML={{ __html: language }} />;
  };

  useEffect(() => {
    // setShowDiff(0);
  }, [oldContent, newContent]);

  const handleFileInputChange = (e: any, setContent: any, setFileName: any) => {
    const file = e.target.files[0];
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      setContent(event.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <>
      <div className="flex flex-row p-2 pb-4">
        <div className="form-control max-w-48 ml-auto">
          <label className="cursor-pointer label" htmlFor="splitView">
            <span className="label-text text-gray-500">Split view</span>
            <input
              type="checkbox"
              className="toggle toggle-info ml-2 toggle-sm"
              checked={splitView}
              onChange={() => setSplitView(!splitView)}
            />
          </label>
        </div>
        <div className="form-control max-w-48">
          <label className="cursor-pointer label" htmlFor="syntaxHighlight">
            <span className="label-text text-gray-500">Syntax Highlight</span>
            <input
              type="checkbox"
              className="toggle toggle-info ml-2 toggle-sm"
              checked={isSyntaxHighlight}
              onChange={() => setIsSyntaxHighlight(!isSyntaxHighlight)}
            />
          </label>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 p-2 pr-1">
          <div className="flex mb-2 justify-center">
            <span className="label-text text-gray-500 font-bold leading-none">
              Old code {oldFile ? <span>({oldFile})</span> : <></>}
            </span>
            <label htmlFor="oldFileInput" className="w-2">
              <AiFillFileAdd className=" text-gray-500 text-sm" />
              <input
                id="oldFileInput"
                type="file"
                className="hidden"
                onChange={(e) =>
                  handleFileInputChange(e, setOldContent, setOldFile)
                }
              />
            </label>
          </div>

          <textarea
            onChange={({ target }) => setOldContent(target.value)}
            value={oldContent}
            className="p-2 textarea focus:outline-none textarea-bordered textarea-lg w-full"
          />
        </div>
        <div className="w-1/2 p-2 pl-1">
          <div className="flex mb-2 justify-center">
            <span className="label-text text-gray-500 font-bold leading-none">
              New code {newFile ? <span>({newFile})</span> : <></>}
            </span>
            <label htmlFor="newFileInput" className="w-2">
              <AiFillFileAdd className=" text-gray-500 text-sm" />
              <input
                id="newFileInput"
                type="file"
                className="hidden"
                onChange={(e) =>
                  handleFileInputChange(e, setNewContent, setNewFile)
                }
              />
            </label>
          </div>
          <textarea
            onChange={({ target }) => setNewContent(target.value)}
            value={newContent}
            className="p-2 textarea focus:outline-none textarea-bordered textarea-lg w-full"
          />
        </div>
      </div>
      <div className="mb-2 text-center" />

      {oldContent && newContent ? (
        <ReactDiff
          highlightLines={highlightLine}
          onLineNumberClick={onLineNumberClick}
          oldValue={oldContent}
          newValue={newContent}
          splitView={splitView}
          renderContent={isSyntaxHighlight ? syntaxHighlight : undefined}
          leftTitle={
            splitView ? oldFile || 'Old content' : `${oldFile}->${newFile}`
          }
          rightTitle={newFile || 'New content'}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default DiffChecker;
