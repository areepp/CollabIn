import PROJECTS_JSON from './../../constants/projects.json'
type ProjectProps = {
  title: string
  image: string
  description: string
  id: string
  index?: number
}

const ProjectList1 = ({ title, image, description, id }: ProjectProps) => {
  return (
    <a
      href={`/projects/${id}`}
      className={`relative flex flex-col gap-1 px-6 cursor-pointer text-background first:after:content-[""] first:after:absolute first:after:w-1 lg:first:after:h-[400vh] first:after:bg-background first:after:right-0`}
    >
      <div className="w-full h-[250px] mx-auto">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover grayscale-100 grayscale duration-300 hover:grayscale-0"
        />
      </div>
      <h3 className="font-bold text-4xl">{title}</h3>
      <p className="font-mono md:text-sm text-xs">{description}</p>
    </a>
  )
}

const ProjectList2 = ({
  title,
  image,
  description,
  id,
  index,
}: ProjectProps) => {
  return (
    <div
      className={`px-6 relative ${index === 1 ? 'after:content-[""] after:absolute after:w-1 lg:after:h-[400vh] after:bg-background after:right-0 after:top-0' : ''}`}
    >
      <a
        href={`/projects/${id}`}
        className="bg-background text-text flex flex-col gap-3 items-center text-center p-3 cursor-pointer rounded"
      >
        <h3 className="font-bold text-4xl">{title}</h3>
        <div className="w-full h-[250px]">
          <img
            src={image}
            alt=""
            className="w-full h-full grayscale-100 object-cover grayscale duration-300 hover:grayscale-0"
          />
        </div>
        <p className="font-mono md:text-sm text-xs">{description}</p>
      </a>
    </div>
  )
}

const Content = () => {
  return (
    <div className="mt-3 mb-24 grid lg:grid-cols-3 md:grid-cols-2 gap-y-6 overflow-hidden">
      {PROJECTS_JSON.projects.map((project, index) => {
        if (index % 2 === 0)
          return (
            <ProjectList1
              key={project.id}
              id={project.id}
              description={project.description.slice(0, 300) + '...'}
              image={project.media[0]}
              title={project.title}
            />
          )

        if (index % 2 === 1)
          return (
            <ProjectList2
              key={project.id}
              id={project.id}
              description={project.description.slice(0, 190) + '...'}
              image={project.media[0]}
              title={project.title}
              index={index}
            />
          )
      })}
    </div>
  )
}

export default Content
