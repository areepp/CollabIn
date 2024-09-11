import { AnimatePresence, motion } from 'framer-motion'
import PROJECTS_JSON from './../../constants/projects.json'

type ProjectProps = {
  title: string
  image: string
  description: string
  id: string
  index?: number
}

const CARD_VARIANTS = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: [0, 0.55, 0.45, 1],
    },
  },
}

const CARD_WRAPPER_VARIANTS = {
  initial: {
    transition: {
      staggerChildren: 0.25,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.25,
      staggerDirection: 1,
    },
  },
}

const ProjectList1 = ({ title, image, description, id }: ProjectProps) => {
  return (
    <motion.a
      variants={CARD_VARIANTS}
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
      <p className="font-mono text-sm">{description}</p>
    </motion.a>
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
    <motion.div
      variants={CARD_VARIANTS}
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
        <p className="font-mono text-sm">{description}</p>
      </a>
    </motion.div>
  )
}

type ContentProps = {
  filter: string
}

const Content = ({ filter }: ContentProps) => {
  const filteredProjects = PROJECTS_JSON.projects.filter((project) => {
    switch (filter) {
      case 'all_projects':
        return true
      case 'open_for_contributions':
        return project.is_finished === false
      case 'finished':
        return project.is_finished === true
      default:
        return false
    }
  })

  return (
    <AnimatePresence>
      <motion.div
        key={filter}
        variants={CARD_WRAPPER_VARIANTS}
        initial="initial"
        animate="animate"
        className="mt-3 mb-24 grid lg:grid-cols-3 md:grid-cols-2 gap-y-6 overflow-hidden"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => {
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
          })
        ) : (
          <p>No projects found for the selected filter.</p>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default Content
