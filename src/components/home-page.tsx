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
    className="flex even:flex-row-reverse gap-6 items-center cursor-pointer"
  >
    <div className="flex-1 h-[350px] relative">
      <img
        src={imageUrl}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition"
        alt="project cover"
      />
    </div>
    <div className="w-px h-[350px] bg-background" />
    <div className="w-[400px] self-start">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="mt-3">{description}</p>
    </div>
  </a>
)

const HomePage = () => {
  return (
    <main>
      <section
        className={`relative z-10 flex items-center justify-center flex-col text-center h-[calc(100vh-64px)] bg-cover bg-center`}
        style={{
          backgroundImage: 'url("/index-main-background.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 -z-10" />
        <div className="max-w-5xl">
          <h1 className="text-9xl text-text font-extrabold">
            COLLABORATION IN ACTION, BIAR MAREM.
          </h1>
          <p className="mt-12 text-xl max-w-xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
      </section>
      <img src="/wave-1.svg" className="w-full absolute -mt-2" />
      <section className="container mx-auto p-32 mt-[15vw]">
        <div className="flex items-center gap-12">
          <div>
            <img
              src="/pahatan-1.png"
              width="250"
              height="393"
              alt="patung pahatan"
            />
          </div>
          <div className="w-3/5">
            <h2 className="text-5xl font-extrabold">OUR VISION</h2>
            <p className="mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centurie Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type{' '}
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-12">
          <div>
            <img
              src="/pahatan-bermasker.png"
              width="250"
              height="374"
              alt="patung pahatan"
            />
          </div>
          <div className="w-3/5 text-right">
            <h2 className="text-5xl font-extrabold">OUR MISSION</h2>
            <p className="mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centurie Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type{' '}
            </p>
          </div>
        </div>
      </section>
      <img src="/wave-2.svg" className="w-full absolute -mt-[2vh]" />
      <section className="bg-text text-background pt-[7vw]">
        <div className="container p-32 pb-0 mx-auto">
          <h2 className="text-9xl font-extrabold text-secondary pl-8">
            PROJECTS
          </h2>
          <div className="mt-12 flex flex-col gap-24">
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
            <div className="flex items-center">
              <div className="flex-1">
                <ProjectThumbnail
                  id={PROJECTS_JSON.projects[2].id}
                  imageUrl={PROJECTS_JSON.projects[2].media[0]}
                  title={PROJECTS_JSON.projects[2].title}
                  description={PROJECTS_JSON.projects[2].description}
                />
              </div>
              <div className="w-px h-[350px] ml-6 bg-background" />
              <a
                href="/projects"
                className="font-bold hover:underline transition text-3xl w-[300px] flex-shrink-0 text-center"
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
          <div className="max-w-xl space-y-3">
            <h2 className="text-8xl font-extrabold text-secondary max-w-xl ">
              FIND YOUR NEXT COLLABORATOR TODAY
            </h2>
            <p>
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
    </main>
  )
}

export default HomePage
