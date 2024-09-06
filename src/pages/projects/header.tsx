import { useState } from 'react';
import data from '../../constants/projects.json';
import Button from '../../components/button';

const Header = ({ subheader }: { subheader?: string }) => {
  const [headerText, setHeaderText] = useState('ALL PROJECTS');
  const [filteredData, setFilteredData] = useState(data.projects);

  const handleFilter = (text?: string) => {
    let result;

    if (text === 'FINISHED') {
      result = data.projects.filter((detail) => detail.is_finished === true);
    } else if (text === 'OPEN FOR CONTRIBUTION') {
      result = data.projects.filter((detail) => detail.is_finished === false);
    } else {
      result = data.projects;
    }

    setHeaderText(String(text));
    setFilteredData(result);
  };

  return (
    <div className="flex flex-col bg-text text-background relative">
      <ul className="flex xl:text-2xl lg:text-base md:text-sm text-xs font-bold z-10">
        <li
          onClick={() => handleFilter('ALL PROJECTS')}
          className="flex-1 text-start py-2 cursor-pointer"
        >
          ALL PROJECTS
        </li>
        <li
          onClick={() => handleFilter('OPEN FOR CONTRIBUTION')}
          className="flex-2 text-center py-2 cursor-pointer"
        >
          OPEN FOR CONTRIBUTION
        </li>
        <li
          onClick={() => handleFilter('FINISHED')}
          className="flex-1 text-end py-2 cursor-pointer"
        >
          FINISHED
        </li>
      </ul>
      <hr className="bg-background h-1" />
      <div className="w-max mx-auto font-extrabold">
        {subheader && (
          <div>
            <div className="flex gap-4 mt-5 justify-between items-center">
              <h2 className="text-5xl">{subheader}</h2>
              <hr className="bg-background h-1 flex-1" />
            </div>
          </div>
        )}
        <h2 className="text-center sm:text-9xl text-5xl">{headerText}</h2>
      </div>
      {subheader === 'MY PROJECTS' && (
        <Button className="absolute right-7 -bottom-7">ADD PROJECT</Button>
      )}
    </div>
  );
};

export default Header;
