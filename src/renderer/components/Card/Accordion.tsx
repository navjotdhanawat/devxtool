import React, { useState, memo } from 'react';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import PropTypes from 'prop-types';

interface IconProps {
  isOpen: boolean;
}

const AccordionIcon: React.FC<IconProps> = memo(({ isOpen }) => {
  return isOpen ? (
    <MdOutlineKeyboardArrowDown />
  ) : (
    <MdOutlineKeyboardArrowRight />
  );
});

AccordionIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

interface Props {
  title: string;
  children: React.ReactNode;
  defaultIsOpen: boolean;
}

const Accordion: React.FC<Props> = ({ title, children, defaultIsOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  return (
    <div className="relative rounded-md mb-3">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 block w-full rounded-md focus:outline-none"
      >
        <div className=" text-left leading-5 text-xs font-bold text-gray-400 truncate">
          {title}
        </div>
        <div className="absolute top-0 right-0 text-gray-400">
          <AccordionIcon isOpen={isOpen} />
        </div>
      </button>
      {isOpen && (
        <div className="px-1 py-1 text-left leading-5">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
