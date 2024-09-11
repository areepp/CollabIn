import { useState } from 'react'
import Button from '../../components/button'
import { ImageInput, TextInput } from '../../components/input'
import PROJECT_DATA from '../../constants/projects.json'

const ProjectDetail = ({
  id,
  isMyProject = false,
}: {
  id: number
  isMyProject?: boolean
}) => {
  const [showContributeForm, setShowContributeForm] = useState(false)

  return (
    <div className="mb-[550px]">
      <div className="w-full max-h-[650px] min-h-[230px] h-[50vw] relative">
        <img
          src={PROJECT_DATA.projects[id - 1].media[0]}
          className="w-full h-full object-cover px-6 sm:px-12 lg:px-24"
          alt="project cover"
        />
        <div className="absolute inset-0 bg-text w-full h-[100px] -z-10" />
        <img
          src="/wave-3.svg"
          alt=""
          className="absolute w-full top-[10vh] -z-10"
        />
      </div>
      <section className="relative mt-12 sm:mt-24 px-4 sm:px-8 lg:px-32 container mx-auto">
        <div className="md:flex hidden flex-col gap-3 sm:gap-0 sm:flex-row sm:justify-between text-secondary">
          <div>
            <p>
              {PROJECT_DATA.projects[id - 1].author} --{' '}
              {PROJECT_DATA.projects[id - 1].title}
            </p>
            {PROJECT_DATA.projects[id - 1].contributors.length > 0 && (
              <div className="flex gap-2 mt-3 text-sm">
                <p>contributors : </p>
                <p>{PROJECT_DATA.projects[id - 1].contributors.join(', ')}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-10">
            <p>{PROJECT_DATA.projects[id - 1].category}</p>
            <div className="w-fit">
              <img
                src="/bookmark-icon.svg"
                alt="bookmark icon"
                className="cursor-pointer md:w-7 w-5"
              />
            </div>
          </div>
        </div>
        <div className="w-full mb-3 mr-3 flex justify-end float-end md:hidden">
          <img
            src="/bookmark-icon.svg"
            alt="bookmark icon"
            className="cursor-pointer md:w-7 w-5"
          />
        </div>
        <div className="sm:px-12 lg:px-44">
          <p className="my-12">{PROJECT_DATA.projects[id - 1].description}</p>
          <div className="flex gap-6 flex-wrap justify-center">
            {PROJECT_DATA.projects[id - 1].media.map((media, index) => (
              <img
                key={index}
                src={media}
                className="object-cover w-[150px] h-[150px] lg:w-[250px] lg:h-[250px]"
                alt="other project attachment media"
              />
            ))}
          </div>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-7xl sm:px-16 lg:px-32 mt-24 text-secondary font-extrabold">
          HOW DO YOU CONTRIBUTE TO THIS PROJECT?
        </h2>
        <ul className="sm:px-20 lg:px-44 my-12 space-y-5">
          {PROJECT_DATA.projects[id - 1].job_description.map((point) => (
            <p key={point}>- {point}</p>
          ))}
        </ul>
        <div className="relative mt-24 sm:mt-32 flex flex-col sm:flex-row sm:justify-between gap-12 sm:gap-0">
          <div className="flex items-center">
            <img src="/instagram-logo.svg" alt="instagram logo" />
            <span className="text-xl">
              @{PROJECT_DATA.projects[id - 1].instagram_username}
            </span>
          </div>
          {isMyProject ? (
            <>
              <Button
                onClick={() => setShowContributeForm(!showContributeForm)}
              >
                FINISH PROJECT
              </Button>
              {showContributeForm && (
                <div className="absolute top-full pt-6 right-0 w-full lg:w-1/2 flex flex-col gap-3 lg:gap-6">
                  <TextInput
                    label="CONTRIBUTORS"
                    placeholder="(separated by commas, e.g., John Doe, Quentin)"
                  />
                  <Button>SET PROJECT AS FINISHED</Button>
                </div>
              )}
            </>
          ) : (
            <>
              <Button
                onClick={() => setShowContributeForm(!showContributeForm)}
              >
                CONTRIBUTE NOW
              </Button>
              {showContributeForm && (
                <div className="absolute top-full pt-6 right-0 w-full lg:w-1/2 flex flex-col gap-3 lg:gap-9">
                  <TextInput label="NAME" placeholder="Enter your name" />
                  <TextInput
                    label="EMAIL"
                    placeholder="name@email.com"
                    type="email"
                  />
                  <TextInput label="PHONE NUMBER" placeholder="08xxxxxxxx" />
                  <ImageInput label="PORTFOLIO OR PAST PROJECTS" />
                  <Button>SEND</Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
