import React from 'react';
import data from '../../constants/projects.json';

type ProjectProps = {
  title: string;
  image: string;
  description: string;
  id: string;
};

export const ProjectList1 = ({
  title,
  image,
  description,
  id,
}: ProjectProps) => {
  return (
    <a href={`/projects/${id}`} className="cursor-pointer text-background">
      <img
        src={image}
        alt=""
        width={300}
        className="w-full grayscale-100 grayscale duration-300 hover:grayscale-0"
      />
      <h3 className="font-bold text-4xl py-2">{title}</h3>
      <p className="font-mono text-sm">{description}</p>
    </a>
  );
};

export const ProjectList2 = ({
  title,
  image,
  description,
  id,
}: ProjectProps) => {
  return (
    <a
      href={`/projects/${id}`}
      className="bg-background text-text flex flex-col items-center text-center p-4 cursor-pointer rounded"
    >
      <h3 className="font-bold text-4xl">{title}</h3>
      <img
        src={image}
        alt="Description"
        className="w-full grayscale duration-300 hover:grayscale-0 py-3"
      />
      <p className="font-mono text-sm">{description}</p>
    </a>
  );
};

const Content = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 my-5 bg-text">
      <div className="flex flex-col gap-7 border-r-4 border-background pr-4">
        <ProjectList1
          title={'HOW TO INSTALL LAPTOP'}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centurie Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.`}
          image={'/project-image-2.png'}
          id="123134"
        />
        <ProjectList2
          title={'HOW TO INSTALL LAPTOP'}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centurie Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.`}
          image={'/project-image-2.png'}
          id="123134"
        />
        <ProjectList1
          title={'HOW TO INSTALL LAPTOP'}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centurie Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.`}
          image={'/project-image-2.png'}
          id="123134"
        />
      </div>
      <div>
        <img src="/Divider.png" alt="Divider" className="w-full" />
        <div className="flex flex-col gap-7">
          <ProjectList2
            title={'HOW TO INSTALL LAPTOP'}
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centurie Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.`}
            image={'/project-image-2.png'}
            id="123134"
          />
          <ProjectList1
            title={'HOW TO INSTALL LAPTOP'}
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centurie Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.`}
            image={'/project-image-2.png'}
            id="123134"
          />
          <ProjectList2
            title={'HOW TO INSTALL LAPTOP'}
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centurie Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.`}
            image={'/project-image-2.png'}
            id="123134"
          />
        </div>
      </div>
      <div className="flex flex-col gap-7 border-l-4 border-background pl-4">
        <ProjectList1
          title={'HOW TO LAPTOP'}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centurie Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.`}
          image={'/project-image-2.png'}
          id="123134"
        />
        <ProjectList2
          title={'HOW TO LAPTOP'}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centurie Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.`}
          image={'/project-image-2.png'}
          id="123134"
        />
        <ProjectList1
          title={'HOW TO LAPTOP'}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centurie Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.`}
          image={'/project-image-2.png'}
          id="123134"
        />
      </div>
    </div>
  );
};

export default Content;
