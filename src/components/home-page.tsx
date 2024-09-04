const HomePage = () => {
  return (
    <main className="">
      <div
        className="relative z-10 flex items-center justify-center flex-col text-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("/index-main-background.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 -z-10" />
        <div className="max-w-5xl">
          <h1
            className="text-9xl text-text"
            style={{
              fontWeight: 1000,
            }}
          >
            COLLABORATION IN ACTION, BIAR MAREM.
          </h1>
          <p className="mt-12 font-mono text-xl max-w-xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
      </div>
    </main>
  )
}

export default HomePage
