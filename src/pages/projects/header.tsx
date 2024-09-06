import { useState } from 'react';
import Content from './content';
import data from '../../constants/projects.json';

const Projects = () => {
  const [headerText, setHeaderText] = useState('ALL PROJECTS');
  const [filteredData, setFilteredData] = useState(data['project-details']);

  const handleFilter = (text?: string) => {
    let result;

    if (text === 'FINISHED') {
      result = data['project-details'].filter(
        (detail) => detail.is_finished === true
      );
    } else if (text === 'OPEN FOR CONTRIBUTORS') {
      result = data['project-details'].filter(
        (detail) => detail.is_finished === false
      );
    } else {
      result = data['project-details'];
    }

    setHeaderText(String(text));
    setFilteredData(result);
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

export default Projects;
