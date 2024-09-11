import Button from './button'
import PROJECTS_JSON from './../constants/projects.json'

const ProjectThumbnail = ({
  id,
  imageUrl,
  title,
  description,
}: {
  id: string
  imageUrl: string
  title: string
  description: string
}) => (
  <a
    href={`/projects/${id}`}
    className="flex flex-col lg:flex-row lg:even:flex-row-reverse lg:gap-6 gap-3 items-center cursor-pointer"
  >
    <div className="h-[350px] relative">
      <img
        src={imageUrl}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition"
        alt="project cover"
      />
    </div>
    <div className="lg:w-px lg:h-[350px] bg-background" />
    <div className="w-full self-start">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="mt-3 max-w-full md:text-base text-sm">{description}</p>
    </div>
  </a>
)

const HomePage = () => {
  return (
    <>
      <section
        className={`relative z-10 flex items-center justify-center flex-col text-center h-[calc(100vh-80px)] bg-cover bg-center`}
        style={{
          backgroundImage: 'url("/index-main-background.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 -z-10" />
        <div className="max-w-5xl text-start sm:text-center px-5">
          <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-5xl text-text font-extrabold">
            COLLABORATION IN ACTION, BIAR MAREM.
          </h1>
          <p className="md:mt-12 mt-6 md:text-xl text-base max-w-xl md:mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
      </section>
      <section className="relative">
        <img src="/wave-1.svg" className="w-full top-0 inset-x-0 -mt-2" />
        <div className="container md:px-32 mx-auto">
          <div className="flex items-center flex-col md:flex-row sm:gap-12 gap-2 pb-10 lg:pb-0">
            <div>
              <img
                src="/pahatan-1.png"
                width="250"
                height="393"
                alt="patung pahatan"
              />
            </div>
            <div className="sm:w-3/5 w-4/5">
              <h2 className="text-5xl font-extrabold">OUR VISION</h2>
              <p className="mt-3 md:text-base text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centurie Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type{' '}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center sm:gap-12 gap-2">
            <div>
              <img
                src="/pahatan-bermasker.png"
                width="250"
                height="374"
                alt="patung pahatan"
              />
            </div>
            <div className="sm:w-3/5 w-4/5 text-right">
              <h2 className="text-5xl font-extrabold">OUR MISSION</h2>
              <p className="mt-3 md:text-base text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centurie Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-text text-background">
        <img src="/wave-2.svg" className="w-full mt-12" />
        <div className="container md:px-32 px-10 pb-0 mx-auto">
          <h2 className="lg:text-9xl md:text-8xl text-7xl font-extrabold text-secondary md:pl-8">
            PROJECTS
          </h2>
          <div className="lg:mt-12 mt-5 flex flex-col lg:gap-24 gap-12">
            <ProjectThumbnail
              id={PROJECTS_JSON.projects[0].id}
              imageUrl={PROJECTS_JSON.projects[0].media[0]}
              title={PROJECTS_JSON.projects[0].title}
              description={PROJECTS_JSON.projects[0].description}
            />
            <ProjectThumbnail
              id={PROJECTS_JSON.projects[1].id}
              imageUrl={PROJECTS_JSON.projects[1].media[0]}
              title={PROJECTS_JSON.projects[1].title}
              description={PROJECTS_JSON.projects[1].description}
            />
            <div className="flex items-center lg:flex-row flex-col">
              <div className="w-full lg:flex-1">
                <ProjectThumbnail
                  id={PROJECTS_JSON.projects[2].id}
                  imageUrl={PROJECTS_JSON.projects[2].media[0]}
                  title={PROJECTS_JSON.projects[2].title}
                  description={PROJECTS_JSON.projects[2].description}
                />
              </div>
              <div className="w-px lg:h-[350px] ml-6 bg-background" />
              <a
                href="/projects"
                className="font-bold hover:underline transition text-3xl xl:w-[300px] w-[150px] flex-shrink-0 text-center py-10 lg:pt-0"
              >
                SHOW MORE
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background text-text flex items-center justify-center relative">
        <div className="flex flex-col text-center absolute pb-24 gap-6 -top-2 items-center">
          <img src="/wave-3.svg" className="w-screen -top-10" />
          <div className="max-w-xl space-y-3 px-5">
            <h2 className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-extrabold text-secondary max-w-xl ">
              FIND YOUR NEXT COLLABORATOR TODAY
            </h2>
            <p className="md:text-base text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, ustry.
            </p>
          </div>
          <Button className="w-fit">
            <a href="/my-projects/new">CREATE PROJECT</a>
          </Button>
        </div>
      </section>
    </>
  )
}

export default HomePage
