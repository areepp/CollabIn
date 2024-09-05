import { NAVBAR_HEIGHT } from './navbar'

const HomePage = () => {
  return (
    <main>
      <div
        className={`relative z-10 flex items-center justify-center flex-col text-center h-[calc(100vh-${NAVBAR_HEIGHT})] bg-cover bg-center`}
        style={{
          backgroundImage: 'url("/index-main-background.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 -z-10" />
        <div className="max-w-5xl">
          <h1 className="text-9xl text-text font-extrabold">
            COLLABORATION IN ACTION, BIAR MAREM.
          </h1>
          <p className="mt-12 font-mono text-xl max-w-xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
      </div>
      <div className="container mx-auto p-32">
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
            <p className="font-mono mt-3">
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
            <p className="font-mono mt-3">
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
      </div>
    </main>
  )
}

export default HomePage
