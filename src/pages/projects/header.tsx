import { useState } from 'react';
import data from '../../constants/projects.json';

const Header = () => {
  const [headerText, setHeaderText] = useState('ALL PROJECTS');

  const handleFilter = (text?: string) => {
    setHeaderText(String(text));
  };

  return (
    <div className="flex flex-col bg-text text-background">
      <ul className="flex xl:text-2xl lg:text-base md:text-sm text-xs font-bold z-10">
        <li
          onClick={() => handleFilter('ALL PROJECTS')}
          className="flex-1 text-start py-2 cursor-pointer"
        >
          ALL PROJECTS
        </li>
        <li
          onClick={() => handleFilter('OPEN FOR CONTRIBUTORS')}
          className="flex-2 text-center py-2 cursor-pointer"
        >
          OPEN FOR CONTRIBUTORS
        </li>
        <li
          onClick={() => handleFilter('FINISHED')}
          className="flex-1 text-end py-2 cursor-pointer"
        >
          FINISHED
        </li>
      </ul>
      <hr className="bg-background h-1" />
      <h2 className="text-center pt-2 md:pt-0 sm:text-9xl text-5xl font-extrabold">
        {headerText}
      </h2>
    </div>
  );
};

export default Header;
