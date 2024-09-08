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
      <div className="w-full h-[650px] relative">
        <img
          src={PROJECT_DATA.projects[id].media[0]}
          className="w-full h-full object-cover px-24"
          alt="project cover"
        />
        <div className="absolute inset-0 bg-text w-full h-[200px] -z-10" />
        <img
          src="/wave-3.svg"
          alt=""
          className="absolute w-full top-28 -z-10"
        />
      </div>
      <section className="relative mt-24 px-32 container mx-auto">
        <div className="flex justify-between text-secondary">
          <p>
            {PROJECT_DATA.projects[id].author} --{' '}
            {PROJECT_DATA.projects[id].title}
          </p>
          <div className="flex gap-10">
            <p>{PROJECT_DATA.projects[id].category}</p>
            <img
              src="/bookmark-icon.svg"
              alt="bookmark icon"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="px-44">
          <p className="my-12">{PROJECT_DATA.projects[id].description}</p>
          <div className="flex gap-6">
            {PROJECT_DATA.projects[id].media.map((media, index) => (
              <img
                key={index}
                src={media}
                width="150"
                height="150"
                className="object-cover"
                alt="other project attachment media"
              />
            ))}
          </div>
        </div>

        <h2 className="text-7xl px-32 mt-24 text-secondary font-extrabold">
          HOW DO YOU CONTRIBUTE TO THIS PROJECT?
        </h2>
        <p className="px-44 my-12">
          {PROJECT_DATA.projects[id].job_description}
        </p>
        <div className="relative mt-32 flex justify-between">
          <div className="flex items-center">
            <img src="/instagram-logo.svg" alt="instagram logo" />
            <span className="text-xl">
              @{PROJECT_DATA.projects[id].instagram_username}
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
                <div className="absolute top-20 right-0 w-1/2 flex flex-col gap-6">
                  <TextInput
                    label="CONTRIBUTORS"
                    placeholder="Enter the contributors of this project (separated by commas, e.g., John Doe, Quentin)"
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
                <div className="absolute top-full right-0 w-1/2 flex flex-col gap-9">
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
