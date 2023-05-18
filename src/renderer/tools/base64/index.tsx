import React, { useState } from 'react';
import { encode, decode } from 'js-base64';
import { AiFillFileAdd } from 'react-icons/ai';

const Base64Converter = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [isEncoding, setIsEncoding] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRadioChange = (event) => {
    setIsEncoding(event.target.value === 'encode');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEncoding) {
      setOutputValue(encode(inputValue));
    } else {
      setOutputValue(decode(inputValue));
    }
  };

  return (
    <div>
      <div className="flex flex-row p-2 pb-4">
        <div className="form-control max-w-48 ml-auto">
          <label className="label cursor-pointer">
            <span className="label-text">encode</span>
            <input
              onChange={handleRadioChange}
              id="encode"
              name="operation"
              value="encode"
              type="radio"
              className="radio radio-info ml-1"
              checked
            />
          </label>
        </div>
        <div className="form-control max-w-48">
          <label className="label cursor-pointer">
            <span className="label-text">decode</span>
            <input
              className="radio radio-info ml-1"
              type="radio"
              id="decode"
              name="operation"
              value="decode"
              checked={!isEncoding}
              onChange={handleRadioChange}
            />
          </label>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 p-2 pr-1">
          <div className="flex mb-2 justify-center">
            <span className="label-text text-gray-500 font-bold leading-none">
              Input
            </span>
            <label htmlFor="oldFileInput" className="w-2">
              <AiFillFileAdd className=" text-gray-500 text-sm" />
              <input id="oldFileInput" type="file" className="hidden" />
            </label>
          </div>

          <textarea
            value={inputValue}
            onChange={handleInputChange}
            className="p-2 textarea focus:outline-none textarea-bordered textarea-lg w-full"
          />
        </div>
        <div className="w-1/2 p-2 pl-1">
          <div className="flex mb-2 justify-center">
            <span className="label-text text-gray-500 font-bold leading-none">
              Output
            </span>
            <label htmlFor="newFileInput" className="w-2">
              <AiFillFileAdd className=" text-gray-500 text-sm" />
              <input id="newFileInput" type="file" className="hidden" />
            </label>
          </div>
          <textarea
            value={outputValue}
            readOnly
            className="p-2 textarea focus:outline-none textarea-bordered textarea-lg w-full"
          />
        </div>
      </div>

      <div className="mb-2 text-center">
        <button
          type="button"
          className="btn btn-sm btn-info text-white"
          onClick={handleSubmit}
        >
          {isEncoding ? 'Encode' : 'Decode'}
        </button>
      </div>
    </div>
  );
};

export default Base64Converter;
